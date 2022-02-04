// @ts-check
/** @type { import("../../handlers").handlerFactory } */
export default ({
    lib: {
        fooEdit
    }
}) => ({
    'microservice.foo.open': () => ({
        title: 'Edit foo',
        permission: 'microservice.foo.get',
        component: fooEdit
    })
});
