import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import React from "react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Profile.css";
import {
  searchOutline,
  settingsOutline,
} from "ionicons/icons";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton class="ion-margin-end">
              <IonIcon slot="icon-only" icon={searchOutline} />
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={settingsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
