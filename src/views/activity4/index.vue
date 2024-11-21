<template>
    <ion-page>
    <ion-header>
    <ion-toolbar color="primary">
    <ion-title>Map</ion-title>
    </ion-toolbar>
    </ion-header>
    <ion-content>
        <div id="map"></div>
    </ion-content>
    </ion-page>
    </template>
    <script lang="ts">

    
    import { defineComponent } from 'vue';
    import { IonToolbar, IonTitle, IonPage, IonHeader, IonContent, IonFooter } from '@ionic/vue';
    import { GoogleMap } from '@capacitor/google-maps';
    
    export default defineComponent({
        name: "MapScreen",
        components: { IonTitle, IonToolbar, IonHeader, IonPage, IonContent, IonFooter },
        data() {
            return {
            apiKey:'AIzaSyA7nyAevnZcR1GncVAydyO9Nkip0JCBnb8'
            }
        },
        methods: {
        async initMap() {
          
            const mapRef = document.getElementById('map') as HTMLElement;

                  const newMap = await GoogleMap.create({
                  id: 'my-map',
                  element: mapRef, 
                  apiKey: this.apiKey,       
                  config: {
                  center: {
                  lat: 10.189508058315168,
                  lng: 123.73982357378844,
                  },
                  zoom: 16,
            },
        });
        }
       },
       async mounted() {
        this.initMap();
       },
        });
             </script>
             <style scoped>
             #map {
              display: inline-block;
              width: 100vw;
              height: 100vh;
               }
             </style>
       