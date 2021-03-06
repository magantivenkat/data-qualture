import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "../page/Index";
import Query from "../page/Query";
import Person from "../page/Person";
import QueryList from "../page/QueryList";
import EditQuery from "../page/EditQuery";
import TargetList from "../page/TargetList";
import DatasourceList from "../page/DatasourceList";
import Profile from "../page/Profile";
import Team from "../page/Team";
import Datasource from "../page/Datasource";
import Login from "../page/Login";
import Help from "../page/Help";

export default class Page extends React.Component {
  render() {
    const { login, logout, user } = this.props;
    return (
      <main className="page">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/query/:q_id" component={Query} />
          <Route path="/help" component={Help} />
          <Route path="/person/:person_id" component={QueryList} />
          <Route path="/querylist" component={QueryList} />
          <Route exact path="/editquery" component={EditQuery} />
          <Route path="/editquery/:q_id" component={EditQuery} />
          <Route path="/targetlist" component={TargetList} />
          <Route path="/datasourcelist" component={DatasourceList} />
          <Route
            path="/login"
            render={() => {
              return <Login login={login} user={user} />;
            }}
          />
          <Route
            path="/profile"
            render={() => {
              return <Profile logout={logout} user={user} />;
            }}
          />
          <Route path="/datasource/:datasource_id" component={QueryList} />
          <Route exact path="/datasource" component={Datasource} />
          <Route path="/team/:person_id" component={Team} />
          <Route exact path="/team" component={Team} />
        </Switch>
      </main>
    );
  }
}
