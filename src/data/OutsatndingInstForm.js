const OutstandingInstForm= [
    {
        title: "Email",
        _name: "email_id",
        type: "email",
        requiredStatus : true,
        hasOptions: false,
        page: 1
    },
    {
        title:"Please mark your nomination category",
        type:"radio",
        requiredStatus : true,
        _name: "nomination-category",
        hasOptions: true,
        options: ["Outstanding School", "Outstanding College"],
        page:1
    },
    {
        title: "Name of Institution",
        _name:"inst_name",
        type: 'text',
        hasOptions: false,
        requiredStatus : true,
        page:1
    },
    {
        title: "Year of Establishment",
        _name:"year_of_estb",
        type: 'text',
        hasOptions : false,
        requiredStatus : true,
        page:1
    },
    {
        title: "Name of HOI",
        _name:"hoi_name",
        type: 'text',
        hasOptions : false,
        requiredStatus : true,
        page:1
    },
    {
        title: "Designation of HOI",
        _name:"hoi_designation",
        type: 'text',
        hasOptions : false,
        requiredStatus : true,
        page:1
    },
    {
        title: "Date of Joining Of HOI",
        _name:"date_of_join_hoi",
        type: 'date',
        hasOptions : false,
        requiredStatus : true,
        page:1
    },
    {
        title: "Somaiya Email ID",
        _name:"email_id_somaiya",
        type: 'email',
        hasOptions : false,
        requiredStatus : true,
        page:1
    },
    {
        title: "Contact Number",
        _name:"contact_number",
        type: 'text',
        hasOptions : false,
        requiredStatus : true,
        page:1
    },
    {
        title: "Submit a short paragraph/ summary of why you believe your Institution qualifies for the award. (500 – 700 words only)",
        _name:"qualify_reason",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:1
    },
    {
        title: "State the awards/certifications received from various national and international accrediting agencies such as AACSB, NAAC, NBA, Govt. Gradings, School boards and Govt. agencies. (500 words only)",
        _name:"national_int_awards",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2
    },
    {
        title: "Has the institution secured any position in the National Institutional Ranking Framework (NIRF) by the HRD Ministry, Govt. of India. If yes, please specify details and attach relevant documents at the end of the form.(500 words only)",
        _name:"position_nirf",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2
    },
    {
        title: "Has the institution secured any ranking in Industry Journals & periodicals,/ mainline magazines, newspapers. If yes, please specify details and attach relevant documents at the end of the form. (500 words only)",
        _name:"journal_ranking",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2
    },
    {
        title: "Has the HOI or any of the faculty got nominated as Heads of Councils and Committees of outside agencies/ universities. If yes, please specify details and attach relevant documents at the end of the form. (500 words only)",
        _name:"hoi_nominated",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2
    },
    {
        title: "Mention the number and list of toppers (students) at University levels or Board levels (250 words only)",
        _name:"toppers_list",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2
    },
    {
        title:"Comment on the admissions status (total available student intake and vacant seats) and increasing trends for each year of your institution (250 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "admission_status",
        hasOptions: false,
        page:2
    },
    {
        title:"Specify about any grants received from outside agencies and Governmental bodies’ and about their utilization (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "grants_recieved",
        hasOptions: false,
        page:2
    },
    {
        title:"Mention the college festivals and events (about any unique events which has benefitted to the campus/society) (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "clg_fest_events",
        hasOptions: false,
        page:2
    },
    {
        title:"List the current and market oriented courses introduced this year. (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "courses_curr",
        hasOptions: false,
        page:2
    },
    {
        title:"Have you organized any national/ international level conferences/ seminar/ exhibition. Please attach a post-show report along with photographs at the end of this form (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "seminar_conf",
        hasOptions: false,
        page:2
    },
    {
        title:"List all the donations and scholarships received by your Institution (250 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "scholarship_donation",
        hasOptions: false,
        page:2
    },
    {
        title:"Have you added any new infrastructure or facilities this year (750 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "new_infra",
        hasOptions: false,
        page:3
    },
    {
        title:"What are the activities undertaken to maintain a hygienic environment within the building and external surroundings (750 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "hygenic_activities",
        hasOptions: false,
        page:3
    },
    {
        title:"State measures taken to enhance the student experience in your institution (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "student_exp",
        hasOptions: false,
        page:3
    },
    {
        title:"State the frequency of Safety procedures and processes such as fire drills, women’s safety, etc. being conducted. (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "safety_procedure",
        hasOptions: false,
        page:3
    },
    {
        title:"State the Disaster Management system, Communication strategies with parents in case of emergencies, eg. floods, etc. (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "disaster_mang",
        hasOptions: false,
        page:3
    },
    {
        title:"Based on the responses given in section B, rate your institution on a scale of 1 to 5, where 1 is very poor and 5 is outstanding",
        type:"radio",
        requiredStatus : true,
        _name: "institution_ratings",
        hasOptions: true,
        options: [1,2,3,4,5],
        page:3
    },
    {
        title:"List the received external awards at state, national or international competitions in the following areas ● Cultural activities- music, dance, drama, debates ● Sports activities and competitions ● NCC / NSS ● External exams such as NTSE / Olympiads etc (1000 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "external_awards",
        hasOptions: false,
        page:4
    },
    {
        title:"State the parental involvement and contribution for schools such as PTA etc (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "parental_envolvement",
        hasOptions: false,
        page:4
    },
    {
        title:"List the Committees run by students and their significant achievements (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "student_committees",
        hasOptions: false,
        page:4
    },
    {
        title:"List and provide a brief synopsis of the research projects (completed and ongoing) (750 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "research_projects",
        hasOptions: false,
        page:5
    },
    {
        title:"State the faculty awards and recognitions from outside agencies (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "faculty_awards",
        hasOptions: false,
        page:5
    },
    {
        title:"Provide details of faculty articles published in journals, magazines, books in both national and international publications (attach photocopies at the end of the form) (1000 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "articles_published",
        hasOptions: false,
        page:5
    },
    {
        title:"List and provide a short synopsis of the total number of faculty participation and presentation of papers in state, national, international,  conferences/seminars organized by other institutions/agencies (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "faculty_participation",
        hasOptions: false,
        page:5
    },
    {
        title:"State some significant improvements in Governance (processes & culture) (500 words only))",
        type:"textarea",
        requiredStatus : true,
        _name: "governance_improve",
        hasOptions: false,
        page:6
    },
    {
        title:"What are the processes and methodology used to share the Founder’s vision and mission within your institution (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "vision_share",
        hasOptions: false,
        page:6
    },
    {
        title:"Describe the use of latest technology as teaching aids and teaching innovation methodology (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "latest_tech_aids",
        hasOptions: false,
        page:6
    },
    {
        title:"List the Faculty & Staff Development programmes conducted vis a vis those identified (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "fS_dev_prog",
        hasOptions: false,
        page:6
    },
    {
        title:"List the Workshops/ seminars/ conferences/ exhibitions conducted for employees and students if any (500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "workshop_seminars",
        hasOptions: false,
        page:6
    },
    {
        title:"Elaborate on the participation in faculty exchange programmes (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "fac_exchng_prog",
        hasOptions: false,
        page:7
    },
    {
        title:"State any Consultancy projects undertaken for Corporates or Government (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "consultancy_gov",
        hasOptions: false,
        page:7
    },
    {
        title:"List the activities undertaken by students and teachers and report the outcomes of each.(500 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "stud_fac_acts",
        hasOptions: false,
        page:8
    },
    {
        title:"List the key alumni events, with details of attendance numbers for each (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "alumini_events",
        hasOptions: false,
        page:8
    },
    {
        title:"Involvement of alumni for guest lectures, conferences , as special guests, chief guests (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "alumini_envolvement",
        hasOptions: false,
        page:8
    },
    {
        title:"What kind of support has been solicited / received from alumni eg donations and scholarships (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "support_scholarships",
        hasOptions: false,
        page:8
    },
    {
        title:"Number of placements done based on the student intake (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "placements_done",
        hasOptions: false,
        page:9
    },
    {
        title:"Provide details of activities undertaken and reports of outcomes (300 words only)",
        type:"textarea",
        requiredStatus : true,
        _name: "svv_outcomes",
        hasOptions: false,
        page:9
    },
    {
        title:"What are the significant contributions made by your institution to the support functions eg HR, IT, Sports, Security, PR, AR etc",
        type:"textarea",
        requiredStatus : true,
        _name: "supports_contribs",
        hasOptions: false,
        page:9
    },

    
]


export default OutstandingInstForm;