import { action, decorate, observable } from "mobx";

class mainStore {
  response = null;
  serialNumber = undefined;

  bindData = (value) => {
    this.serialNumber = value;
  };

  method = () => {
    let next = 1;
    let prev = 0;
    for(let i = 0; i < this.serialNumber; i++) {
      next = next + prev;
      prev = next - prev;
    };
    this.response = prev;
    setTimeout(this.clearResponse(), 2000);
    console.log(this.response);
  };

  clearResponse = () => {
    this.response = null;
  };
};

mainStore = decorate(mainStore, {
  response: observable,
  serialNumber: observable,
  bindData: action,
  method: action,
  clearResponse: action,
})

export default new mainStore();