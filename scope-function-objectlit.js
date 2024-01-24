4       if (typeof args !== 'undefined') {
    585         for (const key of Object.keys(args)) {
    586           Object.defineProperty(evt, key, {
    587             get() {
    588               return args[key];
    589             }
    590 
    591           });
    592         }
    593       }



    static getInstance(element) {
        849       return Data.get(getElement(element), this.DATA_KEY);
        850     }

        

        function _interopNamespace(e) {
            13     if (e && e.__esModule) return e;
            14     const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
            15     if (e) {
            16       for (const k in e) {
            17         if (k !== 'default') {
            18           const d = Object.getOwnPropertyDescriptor(e, k);
            19           Object.defineProperty(n, k, d.get ? d : {
            20             enumerable: true,
            21             get: () => e[k]
            22           });
            23         }
            24       }
            25     }
            26     n.default = e;
            27     return Object.freeze(n);
            28   }
            29 

            function _interopNamespace(e) {
                13     if (e && e.__esModule) return e;
                14     const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
                15     if (e) {
                16       for (const k in e) {
                17         if (k !== 'default') {
                18           const d = Object.getOwnPropertyDescriptor(e, k);
                19           Object.defineProperty(n, k, d.get ? d : {
                20             enumerable: true,
                21             get: () => e[k]
                22           });
                23         }
                24       }
                25     }
                26     n.default = e;
                27     return Object.freeze(n);
                28   }
                29 
                623   const Data = {
                    624     set(element, key, instance) {
                    625       
                    639     },
                    640 
                    641     get(element, key) {
                    642     
                    647     }
                };
                           