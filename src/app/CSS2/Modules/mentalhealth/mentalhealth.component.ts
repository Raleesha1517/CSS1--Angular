import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-mentalhealth',
  templateUrl: './mentalhealth.component.html',
  styleUrls: ['./mentalhealth.component.css']
})
export class MentalhealthComponent {
  

  data = [
    {
      number:"1",
      name:"Introduction",
      pdf: "https://drive.google.com/file/d/1PzyYu2-xoNO-DXN_MV4FTiL3BJLWTCyE/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1jeBXcBGTd_q7Y-7pqdWZFrLFZ7JXmP4a/view?usp=drive_link",
      vedio:""

    },{
      number:"2",
      name:"Hx Taking and Assessment",
      pdf: "https://drive.google.com/file/d/1PZ5Q0almuDQ6kzh1pZCF9p-ctQzek2z6/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1jx3yyIBK7D2H3kpi6YjuzA1npaD1VUgx/view?usp=drive_link",
      vedio:""

    },{
      number:"3",
      name:"Depressive disorders",
      pdf: "https://docs.google.com/presentation/d/1PWpnmyMh-et--zwK37t4GciCZHE8WhDl/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true",
      audio:"https://drive.google.com/file/d/15P9uXpBA7r54Im1RxxVu_xsb9Lj9IkVe/view?usp=drive_link",
      vedio:""

    },{
      number:"4",
      name:"Schizophrenia",
      pdf: "https://docs.google.com/presentation/d/1PVZkyaI54QHuS9y--k4M3tlhYY8ujlnV/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true",
      audio:"https://drive.google.com/file/d/1oH6iwq6ZZQfwalYC9ZsS3ErZoTFIwmOx/view?usp=drive_link",
      vedio:""

    },{
      number:"5",
      name:"Introduction to child psychiatry",
      pdf: "https://docs.google.com/presentation/d/1Q4vUMD3lCBMteMND4EW87j7gDFPkAZFC/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true",
      audio:"https://drive.google.com/file/d/1ek-AkjuIQNFdJ-rEHQwlf288X-2EGs82/view?usp=drive_link",
      vedio:""

    },{
      number:"6.1",
      name:"Bahaviour disorders in children - Autism",
      pdf: "https://docs.google.com/presentation/d/1Q1o-pjN1xMK5QrJ5tG15wl98gwexirrm/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true",
      audio:"https://drive.google.com/file/d/1elsE5rnaHPeirKalyOPSTmrHtQ2CG_Ab/view?usp=drive_link",
      vedio:""

    },{
      number:"6.2",
      name:"Bahaviour disorders in children - ADHD",
      pdf: "https://docs.google.com/presentation/d/1Q2jFRDH6Zk24E56EjbWvRN9sAx-y-bIq/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true",
      audio:"https://drive.google.com/file/d/1eouHd-ngoZGPBoNuu1F65IVxp1TzD4iU/view?usp=drive_link",
      vedio:""

    },{
      number:"6.3",
      name:"Bahaviour disorders in children - Emotional",
      pdf: "https://docs.google.com/presentation/d/1Q20Sz5jzFbPcLaAuWqLuWw_-6VU9khVi/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true",
      audio:"https://drive.google.com/file/d/164BF_tuhBluIzXl3Ca2oOeIeUbitHhtH/view?usp=drive_link",
      vedio:""

    },{
      number:"7",
      name:"Bipolar Affective Disorder",
      pdf: "https://drive.google.com/file/d/1P_fHD16YrIg37pOOpML5NNMIxTkuAsjr/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1epIl1AWqkkdmLjnOMqLW55GfJE0SFgGf/view?usp=drive_link",
      vedio:""

    },{
      number:"8",
      name:"Suicide and deliberative self harm",
      pdf: "https://drive.google.com/file/d/1ProfWPKfhjVB5-kI2o-jX_AhuTDmXzse/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1eqDE4NXflMAODSyN0HIKfW4ACJMnerA3/view?usp=drive_link",
      vedio:""

    },{
      number:"9",
      name:"ADP and psychiatric emergencies",
      pdf: "https://drive.google.com/file/d/1Pm2oHky2zR__dS4Lmle1czDrQSu4rKWz/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1Qtk1nReBLCjRQJZ_vhsidmu7KBI1nzT7/view?usp=drive_link",
      vedio:""

    },{
      number:"10",
      name:"Persistent Dilusional Disorders",
      pdf: "https://drive.google.com/file/d/1Po0WmtwFO2jig1tx0u1pLvPJ6flX0mM_/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1QxNtNlHHyXRmPIPi7aCKovTY9Marqj5s/view?usp=drive_link",
      vedio:""

    },{
      number:"11",
      name:"Dementia",
      pdf: "https://drive.google.com/file/d/1Pst7WdxWNTSSJPCcnTLi-tbLUy1K6TZU/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1QyMYEMW1uIFjGZe1Z4NAz2_LiW_kZ94f/view?usp=drive_link",
      vedio:""

    },{
      number:"12",
      name:"Psychological Therapies",
      pdf: "https://drive.google.com/file/d/1PvAESpHxhxRMtk3S7rgfWFjhDTzSlXaA/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1R4ZvtHsxXlpRgF_OO-Bs9D5Vlde5cjL0/view?usp=drive_link",
      vedio:""

    },{
      number:"14",
      name:"Adolescent Mental Health",
      pdf: "https://whatsapp2018.netlify.app/",
      audio:"https://drive.google.com/file/d/1oJ3HU4pnnuZ7quAkM8ONZh_tYM-nm8GD/view?usp=drive_link",
      vedio:""

    },{
      number:"15",
      name:"Sexual Disorders",
      pdf: "https://drive.google.com/file/d/1PukA2PbBtuNYJIseG5zPjRosVkDYcM5W/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1zUP1jCKOHXlacXytYA08MGCpNNZDzeNz/view?usp=drive_link",
      vedio:""

    },{
      number:"16",
      name:"Eating and Sleeping Disorders",
      pdf: "https://drive.google.com/file/d/1PqZN8qQC5iKFUkOIr4T2XORhV9wUJGxT/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1-ZY3POAJGJpFnlXxtXVfKcYuJ3iHZv74/view?usp=drive_link",
      vedio:""

    },{
      number:"17",
      name:"Delirium",
      pdf: "https://docs.google.com/presentation/d/1Po4d8_XShStlUtWw3RmYEQGgkMLGepJ5/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true",
      audio:"https://drive.google.com/file/d/1-d6ozxosWErZ-tqNNoqa1pzeP5BhNO7O/view?usp=drive_link",
      vedio:""

    },{
      number:"18",
      name:"Legal and Ethical Aspects in psychiatry",
      pdf: "https://drive.google.com/file/d/1PtxiWFAKoMITlgzaphNFkQ9GzY_nQJve/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1-otX24eXrMvKQlryJCRZVIdJYYNyA909/view?usp=drive_link",
      vedio:""

    },{
      number:"19",
      name:"Psychoacvtive substance use disorders",
      pdf: "https://drive.google.com/file/d/1QKZPNt2Mv0RPjjXhZ0YS1K36O4gE3wFY/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1ts3eVqx0oMQ-dsNBlAaxbGSaeoNySgV8/view?usp=drive_link",
      vedio:""

    },{
      number:"20",
      name:"Anxiety Disorders and OCD",
      pdf: "https://drive.google.com/file/d/1QFMMwxmxyEpJvQF2aHqYtnYUsdLjCuOZ/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1sMJQcd_zLDlRNqjAteID9R71JwB1QJrQ/view?usp=drive_link",
      vedio:""

    },{
      number:"21",
      name:"Medically Unexplained Symptoms",
      pdf: "https://drive.google.com/file/d/1QGcQiteynF9DtCU2BQwic1ZQJUme1fpY/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1teiJ3Qp_3DA94_5guX7vPBDh_HKoO-wv/view?usp=drive_link",
      vedio:""

    },{
      number:"22",
      name:"Reactions to Stress",
      pdf: "https://drive.google.com/file/d/1QLZ2g7kf2MCDUGWmmCYuskcM77H2ug25/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1sMjNgMxo_ub5O7EhDhKq4YLBNaFHV2Q-/view?usp=drive_link",
      vedio:""

    },{
      number:"23",
      name:"Clinical use of psychotropics",
      pdf: "https://drive.google.com/file/d/1QFIUJwlnbWLlwPvFpD1kinkiuaaJ6B6e/view?usp=drive_link",
      audio:"https://drive.google.com/file/d/1-EZKYFcF8-bsQano9-6njH6upBVdhIaz/view?usp=drive_link",
      vedio:""

    },{
      number:"24",
      name:"Community MH",
      pdf: "https://docs.google.com/presentation/d/1Q9cx9Eo0zkbpBBt-9rtEjoDa6MJk5c-a/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true",
      audio:"https://drive.google.com/file/d/19_CbJ3C85rxw97EmTMX3f8cIkcqKtvZY/view?usp=drive_link",
      vedio:""

    },{
      number:"25",
      name:"Child Abuse",
      pdf: "https://docs.google.com/presentation/d/1Q7fgZdI_8wS_2CZsZP5g_V2Gsm-UBTuV/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true",
      audio:"https://drive.google.com/file/d/19PAWyfuOmODzEsmoXmbtYnGqJRCuas5l/view?usp=drive_link",
      vedio:""

    },{
      number:"26",
      name:"CBD on MUS",
      pdf: "https://docs.google.com/presentation/d/1QAPgLyT4QMrdr_FsgeGm-8bFBbvJVedJ/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true",
      audio:"https://whatsapp2018.netlify.app/",
      vedio:""

    },
    
  ]

  DownloadPDF(){
    var doc = new jsPDF;
    autoTable(doc, {html:"#test", theme:'grid'});
    doc.save("MH");

  }

}
