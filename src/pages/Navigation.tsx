import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";
import HomePage from "./home/Home";
import SearchPage from "./search/Search";
import MakePostPage from "./makepost/MakePost";
import InboxPage from "./inbox/Inbox";
import ProfilePage from "./profile/Profile";
import { Home, Search, Plus, Inbox, User } from "react-feather";

const Navigation: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={HomePage} exact />
        <Route path="/search" component={SearchPage} exact />
        <Route path="/makepost" component={MakePostPage} exact />
        <Route path="/inbox" component={InboxPage} exact />
        <Route path="/profile" component={ProfilePage} exact />
        <Route path="/" render={() => <Redirect to="/home" />} exact />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <Home />
        </IonTabButton>

        <IonTabButton tab="search" href="/search">
          <Search />
        </IonTabButton>

        <IonTabButton tab="makepost" href="/makepost">
          <Plus />
        </IonTabButton>

        <IonTabButton tab="inbox" href="/inbox">
          <Inbox />
        </IonTabButton>

        <IonTabButton tab="profile" href="/profile">
          <User />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default Navigation;
