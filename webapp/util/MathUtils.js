sap.ui.define([], () => {

    "use strict";

    const MathUtils = {

        add: (a, b) => a + b,

        subtract: (a, b) => a - b,

        multiply: (a, b) => a * b,

        divide: (a, b) => {

            if (b === 0)
                throw new Error("Divide by zero exception");

            return a / b;

        },

        module: (a, b) => a % b,

        power: (a, b) => a ** b,

    }

    return MathUtils;

});