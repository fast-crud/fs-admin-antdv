import { useRoute, useRouter } from "vue-router";
import { ref, watch, onMounted, onUnmounted, resolveComponent, nextTick } from "vue";
import getEachDeep from "deepdash-es/getEachDeep";
import _ from "lodash-es";
import BScroll from "better-scroll";
const eachDeep = getEachDeep(_);

function useBetterScroll() {
  let bsRef = ref(null);
  let asideMenuRef = ref();

  function bsInit() {
    if (asideMenuRef.value == null) {
      return;
    }
    bsRef.value = new BScroll(asideMenuRef.value, {
      mouseWheel: true,
      click: true,
      momentum: false,
      // 如果你愿意可以打开显示滚动条
      scrollbar: {
        fade: true,
        interactive: false
      },
      bounce: false
    });
  }

  function bsDestroy() {
    if (bsRef.value != null && bsRef.value.destroy) {
      try {
        bsRef.value.destroy();
      } catch (e) {
        // console.error(e);
      } finally {
        bsRef.value = null;
      }
    }
  }

  onMounted(() => {
    bsInit();
  });

  onUnmounted(() => {
    bsDestroy();
  });

  async function onOpenChange() {
    await nextTick();
    bsRef.value?.refresh();
  }
  return {
    onOpenChange,
    asideMenuRef
  };
}
export default {
  name: "FsMenu",
  props: {
    menus: {},
    expandSelected: {
      default: false
    },
    scroll: {}
  },
  setup(props, ctx) {
    function open(path) {
      if (path == null) {
        return;
      }
      if (path.startsWith("http://") || path.startsWith("https://")) {
        window.open(path);
        return;
      }
      router.push(path);
    }
    function onSelect(item) {
      open(item.key);
    }

    const FsIconify = resolveComponent("FsIconify");

    const buildMenus = (children) => {
      const slots = [];
      if (children == null) {
        return slots;
      }
      for (let sub of children) {
        const title = () => {
          if (sub?.meta?.icon) {
            return (
              <div class={"menu-item-title"}>
                <FsIconify icon={sub.meta.icon} />
                <span>{sub.title}</span>
              </div>
            );
          }
          return sub.title;
        };
        if (sub.children && sub.children.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const subSlots = {
            default: () => {
              return buildMenus(sub.children);
            },
            title
          };
          function onTitleClick() {
            if (sub.path && ctx.attrs.mode === "horizontal") {
              open(sub.path);
            }
          }
          slots.push(<a-sub-menu key={sub.index} v-slots={subSlots} onTitleClick={onTitleClick} />);
        } else {
          slots.push(
            <a-menu-item key={sub.path} title={sub.title}>
              {title}
            </a-menu-item>
          );
        }
      }
      return slots;
    };
    const slots = {
      default() {
        return buildMenus(props.menus);
      }
    };
    const selectedKeys = ref([]);
    const openKeys = ref([]);
    const route = useRoute();
    const router = useRouter();

    function openSelectedParents(fullPath) {
      if (!props.expandSelected) {
        return;
      }
      if (props.menus == null) {
        return;
      }
      const keys = [];
      eachDeep(props.menus, (value, key, parent, context) => {
        if (value == null) {
          return;
        }
        if (value.path === fullPath) {
          _.forEach(context.parents, (item) => {
            if (item.value instanceof Array) {
              return;
            }
            keys.push(item.value.index);
          });
        }
      });
      if (keys.length > 0) {
        openKeys.value = keys;
      }
    }

    watch(
      () => {
        return route.fullPath;
      },
      (path) => {
        // path = route.fullPath;
        selectedKeys.value = [path];
        openSelectedParents(path);
      },
      {
        immediate: true
      }
    );

    const { asideMenuRef, onOpenChange } = useBetterScroll();

    return () => {
      const menu = (
        <a-menu
          mode={"inline"}
          theme={"light"}
          v-slots={slots}
          onClick={onSelect}
          onOpenChange={onOpenChange}
          v-models={[
            [openKeys.value, "openKeys"],
            [selectedKeys.value, "selectedKeys"]
          ]}
        />
      );
      if (props.scroll) {
        return (
          <div ref={asideMenuRef} class={"menu-wrapper"} style={"height:100%;overflow-y:hidden"}>
            {menu}
          </div>
        );
      } else {
        return menu;
      }
    };
  }
};
