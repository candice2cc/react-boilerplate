/**
 * Created by candice on 17/1/23.
 */
const routes = {
    childRoutes: [
        {
            path: '/',
            component: require('./common/components/Root').default,
            indexRoute: {
                getComponent(nextState, callback){
                    require.ensure([], require=> {
                        callback(null, require('./book/containers/BookContainer').default)
                    }, 'book')
                }
            },
            childRoutes: [
                {
                    path: 'book',
                    getComponent(nextState, callback) {
                        require.ensure([], require => {
                            callback(null, require('./book/containers/BookContainer').default)
                        }, 'book')
                    }
                },
                {
                    path: 'course',
                    getComponent(nextState, callback) {
                        require.ensure([], require => {
                            callback(null, require('./course/containers/CourseContainer').default)
                        }, 'course')
                    }
                }


            ]
        }
    ]
};
export default routes;