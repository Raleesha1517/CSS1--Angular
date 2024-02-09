import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CommedhomeComponent } from './Commed/commedhome/commedhome.component';
import { CommedbatsComponent } from './Commed/commedbats/commedbats.component';
import { CommedppComponent } from './Commed/commedpp/commedpp.component';
import { CommedresearchComponent } from './Commed/commedresearch/commedresearch.component';
import { CommedfapComponent } from './Commed/commedfap/commedfap.component';
import { HspshomeComponent } from './HSPS/hspshome/hspshome.component';
import { HspsComponent } from './HSPS/hsps/hsps.component';
import { Hsps3Component } from './HSPS/hsps3/hsps3.component';
import { HspsppComponent } from './HSPS/hspspp/hspspp.component';
import { HspsbatsComponent } from './HSPS/hspsbats/hspsbats.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { SearchComponent } from './Components/search/search.component';
import { Css2homeComponent } from './CSS2/Home/css2home/css2home.component';
import { GeriactricsComponent } from './CSS2/Modules/geriactrics/geriactrics.component';
import { GrowthComponent } from './CSS2/Modules/growth/growth.component';
import { GrowtholdComponent } from './CSS2/Modules/growthold/growthold.component';
import { MentalhealthComponent } from './CSS2/Modules/mentalhealth/mentalhealth.component';
import { NeuroComponent } from './CSS2/Modules/neuro/neuro.component';
import { NutritionComponent } from './CSS2/Modules/nutrition/nutrition.component';
import { NutritionbatsComponent } from './CSS2/Modules/nutritionbats/nutritionbats.component';
import { NutritionoldComponent } from './CSS2/Modules/nutritionold/nutritionold.component';
import { OphthalmologyComponent } from './CSS2/Modules/ophthalmology/ophthalmology.component';
import { PalliativeComponent } from './CSS2/Modules/palliative/palliative.component';
import { RehabilitationComponent } from './CSS2/Modules/rehabilitation/rehabilitation.component';
import { RehablmsComponent } from './CSS2/Modules/rehablms/rehablms.component';
import { ReprobatsComponent } from './CSS2/Modules/reprobats/reprobats.component';
import { ReproductiveComponent } from './CSS2/Modules/reproductive/reproductive.component';
import { TabbarComponent } from './Components/tabbar/tabbar.component';
import { FamilymedicineComponent } from './CSS2/Modules/familymedicine/familymedicine.component';
import { CommedstatisticsComponent } from './Commed/commedstatistics/commedstatistics.component';
import { MentalhealthbatsComponent } from './CSS2/Modules/mentalhealthbats/mentalhealthbats.component';
import { CommedacmComponent } from './Commed/commedacm/commedacm.component';
import { NeurobatsComponent } from './CSS2/Modules/neurobats/neurobats.component';
import { MobiletabbarComponent } from './Components/mobiletabbar/mobiletabbar.component';
import { Commedacm2Component } from './Commed/commedacm2/commedacm2.component';
import { TimetanleComponent } from './Components/timetanle/timetanle.component';
import { AcaDriveComponent } from './CSS1/aca-drive/aca-drive.component';
import { BatNotesComponent } from './CSS1/bat-notes/bat-notes.component';
import { BatVideosComponent } from './CSS1/bat-videos/bat-videos.component';
import { ClinicalsComponent } from './CSS1/clinicals/clinicals.component';
import { McqDiscussionsComponent } from './CSS1/mcq-discussions/mcq-discussions.component';
import { ModulesComponent } from './CSS1/modules/modules.component';
import { PastpapersComponent } from './CSS1/pastpapers/pastpapers.component';
import { PraveenComponent } from './CSS1/praveen/praveen.component';
import { AselasirComponent } from './CSS1/Medicolegal/aselasir/aselasir.component';
import { Css1medicoComponent } from './CSS1/Medicolegal/css1medico/css1medico.component';
import { Css1videosComponent } from './CSS1/Medicolegal/css1videos/css1videos.component';
import { Css2medicoComponent } from './CSS1/Medicolegal/css2medico/css2medico.component';
import { MedicohomeComponent } from './CSS1/Medicolegal/medicohome/medicohome.component';
import { MedicobatsComponent } from './CSS1/Medicolegal/medicobats/medicobats.component';
import { MedicodiscussionsComponent } from './CSS1/Medicolegal/medicodiscussions/medicodiscussions.component';
import { MedicopapersComponent } from './CSS1/Medicolegal/medicopapers/medicopapers.component';
import { OspedisussionsComponent } from './CSS1/OSPE/ospedisussions/ospedisussions.component';
import { OspehomeComponent } from './CSS1/OSPE/ospehome/ospehome.component';
import { OspeshortComponent } from './CSS1/OSPE/ospeshort/ospeshort.component';
import { CvsComponent } from './CSS1/components/cvs/cvs.component';
import { DermatologyComponent } from './CSS1/components/dermatology/dermatology.component';
import { EntComponent } from './CSS1/components/ent/ent.component';
import { NephrologyComponent } from './CSS1/components/nephrology/nephrology.component';
import { OncologyComponent } from './CSS1/components/oncology/oncology.component';
import { PulmonologyComponent } from './CSS1/components/pulmonology/pulmonology.component';
import { ToxicologyComponent } from './CSS1/components/toxicology/toxicology.component';

@NgModule({
  declarations: [
    AppComponent,
    CommedhomeComponent,
    CommedbatsComponent,
    CommedppComponent,
    CommedresearchComponent,
    CommedfapComponent,
    HspshomeComponent,
    HspsComponent,
    Hsps3Component,
    HspsppComponent,
    HspsbatsComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    SearchComponent,
    Css2homeComponent,
    GeriactricsComponent,
    GrowthComponent,
    GrowtholdComponent,
    MentalhealthComponent,
    NeuroComponent,
    NutritionComponent,
    NutritionbatsComponent,
    NutritionoldComponent,
    OphthalmologyComponent,
    PalliativeComponent,
    RehabilitationComponent,
    RehablmsComponent,
    ReprobatsComponent,
    ReproductiveComponent,
    TabbarComponent,
    FamilymedicineComponent,
    CommedstatisticsComponent,
    MentalhealthbatsComponent,
    CommedacmComponent,
    NeurobatsComponent,
    MobiletabbarComponent,
    Commedacm2Component,
    TimetanleComponent,
    AcaDriveComponent,
    BatNotesComponent,
    BatVideosComponent,
    ClinicalsComponent,
    McqDiscussionsComponent,
    ModulesComponent,
    PastpapersComponent,
    PraveenComponent,
    AselasirComponent,
    Css1medicoComponent,
    Css1videosComponent,
    Css2medicoComponent,
    MedicohomeComponent,
    MedicobatsComponent,
    MedicodiscussionsComponent,
    MedicopapersComponent,
    OspedisussionsComponent,
    OspehomeComponent,
    OspeshortComponent,
    CvsComponent,
    DermatologyComponent,
    EntComponent,
    NephrologyComponent,
    OncologyComponent,
    PulmonologyComponent,
    ToxicologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
