import mockUtil from "/src/mock/base";
const options = {
  name: "formRadio",
  idGenerator: 0
};
const list = [
  {
    radio: "1",
    bool: true
  },
  {
    radio: "2",
    bool: false
  },
  {
    radio: "0"
  }
];
options.list = list;
const mock = mockUtil.buildMock(options);
export default mock;
