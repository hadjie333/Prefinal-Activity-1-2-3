<template>
<ion-page>
<ion-header>
<ion-toolbar>
<ion-title>Activity 2</ion-title>
</ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
<ion-card>
    <ion-card-header>
      <ion-card-title>Card Title</ion-card-title>
      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    </ion-card-header>
   <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>
  <ion-card>
   <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c51682b-6f47-4524-91b6-c5c0e665fff9/deznqor-20378bcb-fc2e-4920-87ff-2341a6a30b4b.png/v1/fill/w_1280,h_1077,q_80,strp/fairy_tail_100_years_quest___ignia_by_k9k992_deznqor-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA3NyIsInBhdGgiOiJcL2ZcLzljNTE2ODJiLTZmNDctNDUyNC05MWI2LWM1YzBlNjY1ZmZmOVwvZGV6bnFvci0yMDM3OGJjYi1mYzJlLTQ5MjAtODdmZi0yMzQxYTZhMzBiNGIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.af4SIFPX2GXAgmec650kMIVegkCJmNJLWutbd5iFgZM" />
    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>
  </ion-card>
</ion-content>
</ion-page>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonTitle, IonButton, IonToolbar, IonHeader, IonPage, IonContent, IonFooter } from '@ionic/vue';

export default defineComponent({
    name: "IndexScreen",
    components: { IonTitle, IonButton, IonToolbar, IonHeader, IonPage, IonContent, IonFooter }
    });

    </script>
