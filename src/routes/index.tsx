import { Route, Switch } from 'react-router-dom'
import PromotionReports from '../pages/PromotionReports'

const Routes = () => (
    <Switch>
        <Route path="/" exact component={PromotionReports} /> 
    </Switch>
)

export default Routes