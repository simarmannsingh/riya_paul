import { useState} from 'react'


const Accordian = () => {

    const [active, setActive] = useState(null);   

    const [pastexp, setPastexp] = useState([
        {
            id: 1,
            post: 'Postdoctoral Researcher',
            institute: 'Ludwig-Maximilian-University Munich',
            department: 'Department of Psychiatry & Psychotherapy',
            topic: 'Topic: Multi-scale, multimodal stratification and comorbidity analysis in psychiatric disorders',
            periodStarts: 'Oct 2019',
            periodEnds: 'Present'
        },

        {
            id: 2,
            post: 'PhD Researcher',
            institute: 'Max Planck Institute of Psychiatry, Munich',
            department: 'Research Group Statistical Genetics, Translational Research in Psychiatry',
            topic: 'Topic: Multivariate methods for analyzing Combined Multimodal Omics- and multimodal neuroimaging records. <br>a) Unsupervised clustering method using structural brain imaging data (Voxel-Based Morphometry clustering) to define volume based networks. Automated and purely data driven grey matter parcellation for developing VBM (voxel-based morphometry) based atlas system <br>b) Mixed model-based clustering to detect the subtypes in the depression data.<br>c) An unsupervised clustering approach to detect subtypes in the depression using functional MRI datasets.',
            periodStarts: 'Apr 2016',
            periodEnds: 'Sep 2019'
        },

        {
            id: 3,
            post: 'Scientific Researcher',
            institute: 'Robert Bosch Krankenhaus, Stuttgart',
            department: 'Neuroimaging Department',
            topic: 'Worked as a scientific Researcher in Neuroimaging group in Robert Bosch Krankenhaus, Germany. I developed a framework for task MRI image analysis based on stress study in sports.',
            periodStarts: 'Nov 2015',
            periodEnds: 'Mar 2016'
        },

        {
            id: 4,
            post: 'Student Research Assistant',
            institute: 'Max Planck Institute for Bio Cybernetics, Tübingen',
            department: 'Bio Cybernetics',
            topic: 'a) <u>Project 1</u> : Worked as a student research assistant in the topic of “Statistical analysis of netfMRI data” by applying different machine learning and statistical analysis algorithm. <br>b)<u>Project 2</u>: Worked as a student assistant in 9.4 T MRI scan for developing proper parameter for image registration as well as image segmentation by using MIPAV, SPM, FSL software toolboxes. Learned the MIPAV and LIPSIA environment and tried various data to verify the registration and segmentation results.',
            periodStarts: 'Mar 2014',
            periodEnds: 'Aug 2014'
        },

        {
            id: 5,
            post: 'Master Thesis Student',
            institute: 'Max Planck Institute for Bio Cybernetics, Tübingen',
            department: 'Bio Cybernetics',
            topic: 'Worked as a master thesis student in the topic- the viability of EEG measurement of in 8 degrees of freedom vehicle simulator by using EEGLAB, ERPLAB and MATLAB programming. My thesis work was related to analyzing mental workload by using signal processing techniques and classifying them using support vector machine classifier and also measuring signal to noise ratio in a motion simulator during different motion conditions and mental workload measuring tasks (auditory oddball task, auditory n-back task)',
            periodStarts: 'Jun 2014',
            periodEnds: 'Dec 2014'            
        },

        {
            id: 6,
            post: 'Student Research Intern',
            institute: 'Max Planck Institute for Bio Cybernetics, Tübingen',
            department: 'Bio Cybernetics',
            topic: 'Worked as intern student in the topic - the viability of EEG measurement of in 8degrees of freedom vehicle simulator by using auditory oddball experimental task with EEGLAB and MATLAB programming',
            periodStarts: 'Nov 2013',
            periodEnds: 'May 2014'
        },
    ])

    function toggleAccordionCard(accoudionId){        
        if(active === accoudionId){
            return setActive(null)
        }
        setActive(accoudionId)
    }

    function updateRecords()
    {
        setPastexp(pastexp => {
            return { ...pastexp, 
                        id: pastexp.id+1,
                        post: 'new Position',
                        institute: 'new Institute',
                        topic: 'new Topic',
                        periodStarts: 'today',
                        periodEnds:'tomorrow'
                    }
        } )
    }


    return (
        <>
            {pastexp.map( (past) => (
                
                <div key={ past.id } className="grid accordian">            
                    <p> {past.periodStarts} - {past.periodEnds} </p>
                    <div className="block">
                        <h3>{ past.post}</h3>
                        <h4>{past.institute}</h4>
                        <div className={active === past.id ? 'accordion_contents' : 'accordion_nocontents'}>
                            <h5>{past.department}</h5>
                            <p dangerouslySetInnerHTML={{__html: past.topic}} ></p>
                        </div>
                    </div>
                    <button onClick={() => toggleAccordionCard(past.id) } type="button"></button>                    
                </div>
            ))}

            <div className="hookie">
                <button onClick={updateRecords}></button>                
            </div>
        </>
    );

}

Accordian.defaultProps = {
    post: 'Postdoctoral Researcher',
    institute: 'Ludwig-Maximilian-University Munich',
    department: 'Department of Psychiatry & Psychotherapy',
    topic: 'Topic: Multi-scale, multimodal stratification and comorbidity analysis in psychiatric disorders'
}

export default Accordian