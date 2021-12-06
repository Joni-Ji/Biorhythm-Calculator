import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStorage } from './hooks';
import BiorhythmChart from './components/BiorhythmCard';



function App() {
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  // const [name, setName] = useState('');
  const [name, setName] = useLocalStorage('name','');
 
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BioRhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      
      {birthDate &&
        <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
      }
        <IonItem>
          <IonLabel position="floating">Name:</IonLabel>
          <IonInput type="text" value={name}
            onIonChange={(event) => setName(event.detail.value)}
          />
          
        </IonItem>
        
        <IonItem>
        <IonLabel position="floating">Date of Birth:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY" value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)} 
          />
        </IonItem>

        <IonItem>
        <IonLabel position="floating">Target Date:</IonLabel>
          <IonDatetime displayFormat="D MMM YYYY" value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)} 
          />
        </IonItem>
      
      </IonContent>
    </IonApp>
  );
}

export default App;
