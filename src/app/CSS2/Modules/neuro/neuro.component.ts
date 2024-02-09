import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-neuro',
  templateUrl: './neuro.component.html',
  styleUrls: ['./neuro.component.css']
})
export class NeuroComponent {
  
ngOnInit(){}
searchText: string = '';
item: any;

click(){
  alert("Not Uploaded Yet!.If You Have Send it")
}


  OnSeachTextEntered(searchValue: string){
    this.searchText= searchValue;
    console.log(this.searchText)
  }

data = [

  {
    image: 'assets/neuro/0.jpg',
    name: 'Learning Outcomes',
    note: 'https://drive.google.com/file/d/1CkfamvFWZBGWKZXiQcfWI_YAI0o8e_L1/view?usp=drive_link',
    audio: 'https://drive.google.com/file/d/1NH_vDpOjx8jrd_zESmNr-0I1BOcnNj07/view?usp=drivesdk',
    video: 'https://drive.google.com/file/d/1gYglexCsPX4PhjYoAidTu3vmlxK7hklU/view?usp=drive_link',
    moodle:'https://lms.medicine.cmb.ac.lk/mod/resource/view.php?id=29629'
    },

    {
    image: 'assets/neuro/1.1.jpg',
    name: 'The Clinical Approach to Neurological Diagnosis',
    note: 'https://drive.google.com/file/d/1GbQQmFKMm1zuslJuGERs1h_K-PudWeee/view?usp=drive_link',
    audio: 'https://drive.google.com/file/d/1NLU2Wupre0u_tXGaxl3v4YrA5rOkurs6/view?usp=drivesdk',
    video: 'https://whatsapp2018.netlify.app/',
    moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-2'     
    },

  {
      image: 'assets/neuro/2.jpg',
      name: 'Hydrocephalus and neural tube defects',
      note: 'https://drive.google.com/file/d/107-qtZsuc7Nte9rxA8GB4d1eyZLQ6HKg/view?usp=drive_link',
      audio: 'https://drive.google.com/file/d/1NeASWPIJGFWvSu1zm8OgajDNnhNKzmgk/view?usp=drivesdk',
      video: 'https://drive.google.com/file/d/1PVbskubppW4hDzCivsD7mLnbrHpO1dcL/view?usp=drive_link',
       moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-3'     
      },
 {
      image: 'assets/neuro/3.jpg',
      name: 'Central nervous system infections in childrens',
      note: 'https://drive.google.com/file/d/1wIkMCPzCqK211sBkknIMJlkyafwi-7PH/view?usp=drive_link',
      audio: 'https://drive.google.com/file/d/1NhkwRlgip-bvWP6qpFNUAURNUAIXzWRF/view?usp=drivesdk',
      video: 'https://drive.google.com/file/d/1EoBMYbawjU3iCu90cC39YgIn17Bzln34/view?usp=drive_link',
      moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-4'     
      },

      {
        image: 'assets/neuro/3.1.jpg',
        name: 'Viral enchepalitis and Child TB',
        note: 'https://drive.google.com/file/d/1GstwL1nfHEw0aXCuBgaHiMujMKxQdY7N/view?usp=drive_link',
        audio: 'https://whatsapp2018.netlify.app/',
        video: 'https://whatsapp2018.netlify.app/',
         moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-4'     
        },

      {
        image: 'assets/neuro/4.jpg',
        name: 'Central nervous system infections in adults',
        note: 'https://drive.google.com/file/d/1cZt-aHJGsGCxHVFwsmJXuDZiZobWyTGR/view?usp=drive_link',
        audio: 'https://drive.google.com/file/d/1NziDVfH7sTVaiQyhhBRxhdNtK0io85ON/view?usp=drivesdk',
        video: 'https://drive.google.com/file/d/1rFu6hF_2Ppd9Kp5w1gIBPtGU90vzBbqu/view?usp=drive_link',
    moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-6'     
        },

        {
          image: 'assets/neuro/5.jpg',
          name: 'Central nervous system Tuberculosis',
          note: 'https://drive.google.com/file/d/14tCEOm3dIqHekUgRkkkzjQrRAUrPaFPp/view?usp=drive_link',
          audio: 'https://drive.google.com/file/d/1O1NNBV0YGtjixU39ygtj9vz27Pl9NcGi/view?usp=drivesdk',
          video: 'https://drive.google.com/file/d/1J2225dTJMat8O4S9UyriFBQdjOwDt0C2/view?usp=drive_link',
           moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-8'     
          },

          {
            image: 'assets/neuro/6.jpg',
            name: 'Intracranial space occupying lesions',
            note: 'https://drive.google.com/file/d/1wB2fMLCwHM7etQywnIeCHBluhc03scHV/view?usp=drive_link',
            audio: 'https://drive.google.com/file/d/1OtnqtFWHrCnoZZLkQIEggnvuMLjdavjB/view?usp=drivesdk',
            video: 'https://whatsapp2018.netlify.app/',
            moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-9'     
            },

            {
              image: 'assets/neuro/7.jpg',
              name: 'Headache and facial pain',
              note: 'https://drive.google.com/file/d/17TQIgrKOS1zKDRfM34fIklMgqPeQjkuY/view?usp=drive_link',
              audio: 'https://drive.google.com/file/d/1OvpquHKB_L3hf0jw8L87gB9BULwA7mzM/view?usp=drivesdk',
              video: 'https://whatsapp2018.netlify.app/',
               moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-11'     
              },

              {
                image: 'assets/neuro/8.jpg',
                name: 'Head injury',
                note: 'https://docs.google.com/presentation/d/1w5LHGK2whUsC2RVzxF2fFMUmBtD-ybeP/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true',
                audio: 'https://drive.google.com/file/d/1POL-6T0sW-hRa5km6OXkzlgu8IJi-M3w/view?usp=drivesdk',
                video: 'https://whatsapp2018.netlify.app/',
                 moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-13'     
                },

                {
                  image: 'assets/neuro/9.jpg',
                  name: 'Motor neurone diseases',
                  note: 'https://drive.google.com/file/d/1uqSAuci_X8eBkzPy6OzVUvaifLxAlo9g/view?usp=drive_link',
                  audio: 'https://drive.google.com/file/d/1PNAy2TY_b5NUnsI3DrUC2jSxaz8uzUtd/view?usp=drivesdk',
                  video: 'https://drive.google.com/file/d/1xjpJMQ8hTAfWH7C6LlIhFu48wcl83IRv/view?usp=drive_link',
                   moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-15'     
                  },

                  {
                    image: 'assets/neuro/10.jpg',
                    name: 'Parkinson disease and movement disorders ',
                    note: 'https://drive.google.com/file/d/1YU2ctN9WEFA4sTrLHfWROBLg-1uvEPcN/view?usp=drive_link',
                    audio: 'https://drive.google.com/file/d/1QEuNGJVcEiCOAzGh_7DD_5ccpThI33NS/view?usp=drivesdk',
                    video: 'https://whatsapp2018.netlify.app/',
                    moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-17'     
                    },

        

                    {
                      image: 'assets/neuro/11.jpg',
                      name: 'Management of Parkinson disease and movement disorders',
                      note: 'https://drive.google.com/file/d/1YU2ctN9WEFA4sTrLHfWROBLg-1uvEPcN/view?usp=drive_link',
                      audio: 'https://drive.google.com/file/d/1QK9Bdnsiljz1EteoUlGrK1O3dHLAPSjj/view?usp=drivesdk',
                      video: 'https://whatsapp2018.netlify.app/',
                       moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-18'     
                      },

                      {
                        image: 'assets/neuro/12.jpg',
                        name: 'Cerebral palsy',
                        note: 'https://drive.google.com/file/d/1cacRghqeSIP1r7g398ST0fn7c678zrAy/view?usp=drive_link',
                        audio: 'https://drive.google.com/file/d/1Q5jLWDB8Rj9jXCV1RdX48bcX_6-SLk-a/view?usp=drivesdk',
                        video: 'https://drive.google.com/file/d/19r6XRT5X1ZYYzhxKpJSw8-r15AZeCsiM/view?usp=drive_link',
                         moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-19'     
                        },

                        {
                          image: 'assets/neuro/13.jpg',
                          name: 'Classification of seizure and epilepsy',
                          note: 'https://docs.google.com/presentation/d/1d8Awq-jVAdlqpXNep7ctX9_rdGK4Da80/edit?usp=drive_link&ouid=107007707675850420095&rtpof=true&sd=true',
                          audio: 'https://drive.google.com/file/d/1REEbHaHJrF0DoNO7MHrCMqiQUyFzcwoc/view?usp=drivesdk',
                          video: 'https://whatsapp2018.netlify.app/',
                           moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-22'     
                          },

                          {
                            image: 'assets/neuro/14.jpg',
                            name: 'Epilepsy in children and adults',
                            note: 'https://drive.google.com/file/d/1aeb_KUz_geKUadWTCHja3E60ERTtKWIl/view?usp=drive_link',
                            audio: 'https://drive.google.com/file/d/1R3mQYNzDmS_xg4Fi8wyzspQ6njqs4uNE/view?usp=drivesdk',
                            video: 'https://drive.google.com/file/d/19Xtv_rAwel_fTpt762hqYSlrk5vms38t/view?usp=drive_link,https://drive.google.com/file/d/1a6i4ae6AJVjwG54FbTuXUrg1FdZrOt8T/view?usp=drive_link',
                            moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-23'     
                            },

                            {
                              image: 'assets/neuro/15.jpg',
                              name: 'Febrile seizures',
                              note: 'https://drive.google.com/file/d/1JQDYKKRpITxw3vu9qauJXlYy9ZuEOanx/view?usp=drive_link',
                              audio: 'https://drive.google.com/file/d/1RQV7_p7aa74bCs1ZGXrDHTPpggPlD884/view?usbp=drivesdk',
                              video: 'https://whatsapp2018.netlify.app/',
                              moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-24'     
                              },

                              {
                                image: 'assets/neuro/16.jpg',
                                name: 'Management of epilepsy and status epilepticus',
                                note: 'https://drive.google.com/file/d/1V53KVnQnqjXzP0n3sDqPD4eQMUKSSFEq/view?usp=drive_link',
                                audio: 'https://drive.google.com/file/d/1RdyjZPdlERme_NHXkSJ8lLQ2LNUgaJw5/view?usp=drivesdk',
                                video: 'https://whatsapp2018.netlify.app/',
                                 moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-26'     
                                },

                                {
                                  image: 'assets/neuro/17.jpg',
                                  name: 'Stroke and transient ischeamic attacks',
                                  note: 'https://drive.google.com/file/d/18hyiGq_FxKnzZAU9FCylzsP-bJaPleMT/view?usp=drive_link',
                                  audio: 'https://drive.google.com/file/d/1RfGabsQL124r7oJQuB122kH9EjH7VeQU/view?usp=drivesdk',
                                  video: 'https://whatsapp2018.netlify.app/',
                                  moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-27'     
                                  },

                                  {
                                    image: 'assets/neuro/18.jpg',
                                    name: 'Management of Stroke and transient ischeamic attacks',
                                    note: 'https://whatsapp2018.netlify.app/',
                                    audio: 'https://drive.google.com/file/d/1RfGabsQL124r7oJQuB122kH9EjH7VeQU/view?usp=drivesdk',
                                    video: 'https://whatsapp2018.netlify.app/',
                                     moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-28'     
                                    },

                                    
                                    {
                                      image: 'assets/neuro/19.jpg',
                                      name: 'Spontaneous intracranial heamorrhage',
                                      note: 'https://drive.google.com/file/d/1yW0Q0TqcV3l3uECp7Qi7GHgf7B6Eq2J6/view?usp=drive_link',
                                      audio: 'https://drive.google.com/file/d/1TSu6G-S8N-r2karIIcv8M-GF9dSBDZHv/view?usp=drivesdk',
                                      video: 'https://whatsapp2018.netlify.app/',
                                       moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-30'     
                                      },

                                      
                                      {
                                        image: 'assets/neuro/20.jpg',
                                        name: 'Prevention of neurological diseases',
                                        note: 'https://whatsapp2018.netlify.app/',
                                        audio: 'https://drive.google.com/file/d/1TQLozBjz3Qlp8nHzxoTfuX58D4EmSoUc/view?usp=drivesdk',
                                        video: 'https://whatsapp2018.netlify.app/',
                                         moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-32'     
                                        },

                                        {
                                          image: 'assets/neuro/21.jpg',
                                          name: 'Spinal cord and root compression',
                                          note: 'https://drive.google.com/file/d/1GRuJAFCgO20iQYnCcd9_Th40oowIQ3WE/view?usp=drive_link',
                                          audio: 'https://drive.google.com/file/d/1VDBLF6LLInwb1QEgj4nhlAmvHbngLiwI/view?usp=drivesdk',
                                          video: 'https://whatsapp2018.netlify.app/',
                                          moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-35'     
                                          },

                                          {
                                            image: 'assets/neuro/22.jpg',
                                            name: 'Non-compressive myelopathy',
                                            note: 'https://drive.google.com/file/d/1egBNjPjh66dAMh-EMJCiOyxPabqRxJ4r/view?usp=drive_link',
                                            audio: 'https://drive.google.com/file/d/1Uv7dG9VxCfPkdSpRbZTOnoXBbBPwV_ab/view?usp=drivesdk',
                                            video: 'https://whatsapp2018.netlify.app/',
                                            moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-37'     
                                            },

                                            {
                                              image: 'assets/neuro/23.jpg',
                                              name: 'Acute flaccid paralysis',
                                              note: 'https://drive.google.com/file/d/1Xpp3JYt1fiDGv2mar4kmxtjx6Wggg3mm/view?usp=drive_link',
                                              audio: 'https://drive.google.com/file/d/1VxoBbvExluSIEMf6GJXEM6ITLD8d-_dF/view?usp=drivesdk',
                                              video: 'https://whatsapp2018.netlify.app/',
                                              moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-39'     
                                              },

                                              {
                                                image: 'assets/neuro/24.jpg',
                                                name: 'Disorders of neuromuscular junction',
                                                note: 'https://drive.google.com/file/d/1k-PcPhZtxPLOLOm8eB-bZj13mD13wEiR/view?usp=drive_link',
                                                audio: 'https://drive.google.com/file/d/1VjsYIT11BHLnCp5XObSqDnPWrPpy3WJ9/view?usp=drivesdk',
                                                video: 'https://whatsapp2018.netlify.app/',
                                                 moodle:'https://lms.medicine.cmb.ac.lk/course/view.php?id=1268#section-40'     
                                                },

                                                {
                                                  image: 'assets/neuro/24.jpg',
                                                  name: 'Quiz',
                                                  note: 'https://whatsapp2018.netlify.app/',
                                                  audio: 'https://drive.google.com/file/d/1WLNOYaljQU_3yTajFGJG6TJVhnEm63ox/view?usp=drivesdk',
                                                  video: 'https://whatsapp2018.netlify.app/',
                                                   moodle:'https://whatsapp2018.netlify.app/'     
                                                  },





      
    


    


]

DownloadPDF() {
  const doc = new jsPDF();

  const cards = document.querySelectorAll('.card');
  let tableData: (string | null)[][] = [];

  cards.forEach((card, index) => {
    const titleElement = card.querySelector('h4');

    if (titleElement) {
      const title = titleElement.innerText;

      tableData.push([`${index + 1}. ${title}`]);
    }
  });

  // Create a table with only title and PDF link columns
  autoTable(doc,{
    head: [['Title']],
    body: tableData,
    theme: 'grid'
  });

  doc.save('Neuro');
}

}
