import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CommedhomeComponent } from './Commed/commedhome/commedhome.component';
import { CommedppComponent } from './Commed/commedpp/commedpp.component';
import { CommedbatsComponent } from './Commed/commedbats/commedbats.component';
import { CommedfapComponent } from './Commed/commedfap/commedfap.component';
import { CommedresearchComponent } from './Commed/commedresearch/commedresearch.component';
import { HspsComponent } from './HSPS/hsps/hsps.component';
import { Hsps3Component } from './HSPS/hsps3/hsps3.component';
import { HspsbatsComponent } from './HSPS/hspsbats/hspsbats.component';
import { HspshomeComponent } from './HSPS/hspshome/hspshome.component';
import { HspsppComponent } from './HSPS/hspspp/hspspp.component';
import { FamilymedicineComponent } from './CSS2/Modules/familymedicine/familymedicine.component';
import { CommedstatisticsComponent } from './Commed/commedstatistics/commedstatistics.component';
import { MentalhealthbatsComponent } from './CSS2/Modules/mentalhealthbats/mentalhealthbats.component';
import { CommedacmComponent } from './Commed/commedacm/commedacm.component';
import { NeurobatsComponent } from './CSS2/Modules/neurobats/neurobats.component';
import { Commedacm2Component } from './Commed/commedacm2/commedacm2.component';
import { TimetanleComponent } from './Components/timetanle/timetanle.component';
import { BatNotesComponent } from './CSS1/bat-notes/bat-notes.component';
import { ModulesComponent } from './CSS1/modules/modules.component';
import { PulmonologyComponent } from './CSS1/components/pulmonology/pulmonology.component';
import { ClinicalsComponent } from './CSS1/clinicals/clinicals.component';
import { CvsComponent } from './CSS1/components/cvs/cvs.component';
import { NephrologyComponent } from './CSS1/components/nephrology/nephrology.component';
import { OncologyComponent } from './CSS1/components/oncology/oncology.component';
import { ToxicologyComponent } from './CSS1/components/toxicology/toxicology.component';
import { BatVideosComponent } from './CSS1/bat-videos/bat-videos.component';
import { PastpapersComponent } from './CSS1/pastpapers/pastpapers.component';
import { PraveenComponent } from './CSS1/praveen/praveen.component';
import { DermatologyComponent } from './CSS1/components/dermatology/dermatology.component';
import { EntComponent } from './CSS1/components/ent/ent.component';
import { AcaDriveComponent } from './CSS1/aca-drive/aca-drive.component';
import { McqDiscussionsComponent } from './CSS1/mcq-discussions/mcq-discussions.component';
import { MedicohomeComponent } from './CSS1/Medicolegal/medicohome/medicohome.component';
import { Css2medicoComponent } from './CSS1/Medicolegal/css2medico/css2medico.component';
import { MedicopapersComponent } from './CSS1/Medicolegal/medicopapers/medicopapers.component';
import { MedicobatsComponent } from './CSS1/Medicolegal/medicobats/medicobats.component';
import { Css1medicoComponent } from './CSS1/Medicolegal/css1medico/css1medico.component';
import { Css1videosComponent } from './CSS1/Medicolegal/css1videos/css1videos.component';
import { OspehomeComponent } from './CSS1/OSPE/ospehome/ospehome.component';
import { OspeshortComponent } from './CSS1/OSPE/ospeshort/ospeshort.component';
import { OspedisussionsComponent } from './CSS1/OSPE/ospedisussions/ospedisussions.component';
import { AselasirComponent } from './CSS1/Medicolegal/aselasir/aselasir.component';
import { MedicodiscussionsComponent } from './CSS1/Medicolegal/medicodiscussions/medicodiscussions.component';

const routes: Routes = [
  //Components
    { path : '', component : CarouselComponent},
    { path : 'search', component : SearchComponent},
    { path : 'timetable', component : TimetanleComponent},

  //css1
  { path : 'batnotes', component : BatNotesComponent},
  { path : 'modules', component : ModulesComponent},
  { path : 'pulmono', component : PulmonologyComponent},
  { path : 'clinical', component : ClinicalsComponent},
  { path : 'cvs', component : CvsComponent},
  { path : 'nephro', component : NephrologyComponent},
  { path : 'onco', component : OncologyComponent},
  { path : 'toxico', component : ToxicologyComponent},
  { path : 'videos', component : BatVideosComponent},
  { path : 'pastpapers', component : PastpapersComponent},
  { path : 'praveen', component : PraveenComponent},
  { path : 'dermat', component : DermatologyComponent},
  { path : 'ent', component : EntComponent},
  { path : 'acad', component : AcaDriveComponent},
  { path : 'mcq', component : McqDiscussionsComponent},
  { path : 'homemedico', component : MedicohomeComponent},
  { path : 'css2medico', component : Css2medicoComponent},
  { path : 'medicopapers', component : MedicopapersComponent},
  { path : 'medicobats', component : MedicobatsComponent},
  { path : 'css1medico', component : Css1medicoComponent},
  { path : 'css1videos', component : Css1videosComponent},
  { path : 'ospehome', component : OspehomeComponent},
  { path : 'ospeshort', component : OspeshortComponent},
  { path : 'discussion', component : OspedisussionsComponent},
  { path : 'asela', component : AselasirComponent},
  { path : 'mddis', component : MedicodiscussionsComponent},


    
  //other

  //CSS2
  { path : 'css2home', component : Css2homeComponent},
  { path : 'geriactrics', component : GeriactricsComponent},
  { path : 'growth', component : GrowthComponent},
  { path : 'growthold', component : GrowtholdComponent},
  { path : 'mentalhealth', component : MentalhealthComponent},
  { path : 'mentalhealthbats', component : MentalhealthbatsComponent},
  { path : 'neuro', component : NeuroComponent},
  { path : 'neurobats', component : NeurobatsComponent},
  { path : 'nutrition', component : NutritionComponent},
  { path : 'nutritionbats', component : NutritionbatsComponent},
  { path : 'nutritionold', component : NutritionoldComponent},
  { path : 'ophthalmology', component : OphthalmologyComponent},
  { path : 'palliative', component : PalliativeComponent},
  { path : 'rehab', component : RehabilitationComponent},
  { path : 'rehablms', component : RehablmsComponent},
  { path : 'reprobats', component : ReprobatsComponent},
  { path : 'repro', component : ReproductiveComponent},
  { path : 'family', component : FamilymedicineComponent},


  //COMMED
  { path : 'commedhome', component : CommedhomeComponent},
  { path : 'commedacm', component : CommedacmComponent},
  { path : 'commedacm2', component : Commedacm2Component},
  { path : 'commedpp', component : CommedppComponent},
  { path : 'commedbats', component : CommedbatsComponent},
  { path : 'commedfap', component : CommedfapComponent},
  { path : 'commedresearch', component : CommedresearchComponent},
  { path : 'commedstatistics', component : CommedstatisticsComponent},

  //HSPS
  { path : 'hsps1', component : HspsComponent},
  { path : 'hsps3', component : Hsps3Component},
  { path : 'hspsbats', component : HspsbatsComponent},
  { path : 'hspshome', component : HspshomeComponent},
  { path : 'hspspp', component : HspsppComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
