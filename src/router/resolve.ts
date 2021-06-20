import LayoutPass from "/src/layout/layout-pass.vue";
import _ from "lodash-es";
import { outsideResource } from "./source/outside";
import { headerResource } from "./source/header";
import { frameworkResource } from "./source/framework";
import { indexResource } from "./source/index";
// @ts-ignore
const modules = import.meta.glob("/src/views/**/*.vue");

let index = 0;
function transformOneResource(resource) {
  let menu: any = null;
  if (resource.meta == null) {
    resource.meta = {};
  }
  const meta = resource.meta;
  meta.title = meta.title ?? resource.title ?? "未命名";
  if (resource.title == null) {
    resource.title = meta.title;
  }
  if (meta.isMenu === false) {
    menu = null;
  } else {
    menu = _.cloneDeep(resource);
  }
  let route;
  if (resource.type !== "menu") {
    if (resource.path == null || resource.path.startsWith("https://") || resource.path.startsWith("http://")) {
      //没有route
      route = null;
    } else {
      route = _.cloneDeep(resource);
      if (route.component && typeof route.component === "string") {
        const path = "/src/views" + route.component;
        route.component = modules[path];
      }
      if (route.component == null) {
        route.component = LayoutPass;
      }
    }
  }

  return {
    menu,
    route
  };
}

export const buildMenusAndRouters = (resources) => {
  const routes: Array<any> = [];
  const menus: Array<any> = [];
  for (const item of resources) {
    const { menu, route } = transformOneResource(item);
    let menuChildren;
    let routeChildren;
    if (item.children) {
      if (item.children.length > 0) {
        const ret = buildMenusAndRouters(item.children);
        menuChildren = ret.menus;
        routeChildren = ret.routes;
      }
    }

    if (menu) {
      menus.push(menu);
      menu.children = menuChildren;
    }
    if (route) {
      routes.push(route);
      route.children = routeChildren;
    }
  }

  setIndex(menus);
  return {
    routes,
    menus
  };
};

function setIndex(menus) {
  for (const menu of menus) {
    menu.index = "index_" + index;
    index++;
    if (menu.children && menu.children.length > 0) {
      setIndex(menu.children);
    }
  }
}
const indexRet = buildMenusAndRouters(indexResource);
const frameworkRet = buildMenusAndRouters(frameworkResource);
const outsideRet = buildMenusAndRouters(outsideResource);
const headerRet = buildMenusAndRouters(headerResource);

const outsideRoutes = outsideRet.routes;
const frameworkRoutes = frameworkRet.routes;
const indexRoutes = indexRet.routes;
const routes = [...outsideRoutes, ...indexRoutes, ...frameworkRoutes];
const frameworkMenus = frameworkRet.menus;
const indexMenus = indexRet.menus[0].children;
const headerMenus = headerRet.menus;
export { routes, outsideRoutes, indexRoutes, frameworkRoutes, indexMenus, frameworkMenus, headerMenus };
