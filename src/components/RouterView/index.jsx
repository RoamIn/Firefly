import React, { Component, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

class RouterView extends Component {
    render() {
        const { routes = [] } = this.props

        return (
            <Suspense fallback={<div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>Loading</div>}>
                <Switch>
                    {
                        routes.map((route, index) =>
                            <Route
                                key={index}
                                path={route.path}
                                render={props => (
                                    // pass the sub-routes down to keep nesting
                                    <route.component {...props} routes={route.routes} exact={route.exact} />
                                )}
                            />
                        )
                    }
                </Switch>
            </Suspense>
        )
    }
}

export default RouterView