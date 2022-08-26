// Storage封装
const STORAGE_KEY = 'mall';
export default {
    //存储值（）
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }


    },
    //获取某一个模块下面的属性user下面的userName(递归)
    getItem(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },

    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(key, module_name) {
        if (module_name) {
            let val = this.getItem(module_name)
            delete val[key]
            this.setItem(module_name, val)
        } else {
            let val = this.getStorage();
            delete val[key]
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }

    }

}