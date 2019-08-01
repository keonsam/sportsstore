const isPromise = (payload) =>
    (typeof(payload) === "object" || typeof(payload) === "function")
    && typeof(payload.then) === "function";
export const asyncActions = () => (next) => (action) => {
    if (isPromise(action.payload)) {
        action.payload.then(result => {
            console.log("first");
            next({...action, payload: result})
        });
    } else {
        next(action)
    }
}
