import { useState } from 'react'


const Accordian = () => {

    const [pastexp, setPastexp] = useState([
        {
            id: 1,
            post: 'Postdoctoral Researcher',
            institute: 'Ludwig-Maximilian-University Munich',
            department: 'Department of Psychiatry & Psychotherapy',
            topic: 'Topic: Multi-scale, multimodal stratification and comorbidity analysis in psychiatric disorders',
            pediodStarts: 'Oct 2019',
            pediodEnds: 'Present'
        },

        {
            id: 2,
            post: 'PhD Researcher',
            institute: 'Max Planck Institute of Psychiatry, Munich',
            department: 'Research Group Statistical Genetics, Translational Research in Psychiatry',
            topic: 'Topic: Multivariate methods for analyzing Combined Multimodal Omics- and multimodal neuroimaging records. a) Unsupervised clustering method using structural brain imaging data (Voxel-Based Morphometry clustering) to define volume based networks. Automated and purely data driven grey matter parcellation for developing VBM (voxel-based morphometry) based atlas system b) Mixed model-based clustering to detect the subtypes in the depression data. c) An unsupervised clustering approach to detect subtypes in the depression using functional MRI datasets.',
            pediodStarts: 'Apr 2016',
            pediodEnds: 'Sep 2019'
        },

        {
            id: 3,
            post: 'Scientific Researcher',
            institute: 'Robert Bosch Krankenhaus, Stuttgart',
            department: 'Neuroimaging Department',
            topic: 'Worked as a scientific Researcher in Neuroimaging group in Robert Bosch Krankenhaus, Germany. I developed a framework for task MRI image analysis based on stress study in sports.',
            pediodStarts: 'Nov 2015',
            pediodEnds: 'Mar 2016'
        },

        {
            id: 4,
            post: 'Student Research Assistant',
            institute: 'Max Planck Institute for Bio Cybernetics, Tübingen',
            department: 'Bio Cybernetics',
            topic: 'a) Project 1: Worked as a student research assistant in the topic of “Statistical analysis of netfMRI data” by applying different machine learning and statistical analysis algorithm. b)Project 2: Worked as a student assistant in 9.4 T MRI scan for developing proper parameter for image registration as well as image segmentation by using MIPAV, SPM, FSL software toolboxes. Learned the MIPAV and LIPSIA environment and tried various data to verify the registration and segmentation results.',
            pediodStarts: 'Mar 2014',
            pediodEnds: 'Aug 2014'
        },

        {
            id: 5,
            post: 'Master Thesis Student',
            institute: 'Max Planck Institute for Bio Cybernetics, Tübingen',
            department: 'Bio Cybernetics',
            topic: 'Worked as a master thesis student in the topic- the viability of EEG measurement of in 8 degrees of freedom vehicle simulator by using EEGLAB, ERPLAB and MATLAB programming. My thesis work was related to analyzing mental workload by using signal processing techniques and classifying them using support vector machine classifier and also measuring signal to noise ratio in a motion simulator during different motion conditions and mental workload measuring tasks (auditory oddball task, auditory n-back task)',
            pediodStarts: 'Jun 2014',
            pediodEnds: 'Dec 2014'            
        },

        {
            id: 6,
            post: 'Student Research Intern',
            institute: 'Max Planck Institute for Bio Cybernetics, Tübingen',
            department: 'Bio Cybernetics',
            topic: 'Worked as intern student in the topic - the viability of EEG measurement of in 8degrees of freedom vehicle simulator by using auditory oddball experimental task with EEGLAB and MATLAB programming',
            pediodStarts: 'Nov 2013',
            pediodEnds: 'May 2014'
        },
    ])


    return (
        <>
            {pastexp.map( (past) => (
                
                <div key={ past.id } className="grid accordian">            
                    <p> {past.pediodStarts} - {past.pediodEnds} </p>
                    <div className="block">
                        <h3>{ past.post}</h3>
                        <div className="accordion_contents">
                            <h4>{past.institute}</h4>
                            <h5>{past.department}</h5>
                            <p>{past.topic}</p>
                        </div>
                    </div>
                    <button type="button"></button>
                </div>
            ))}
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