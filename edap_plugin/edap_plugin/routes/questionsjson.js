const data = {
  groups: [
    {
      group: "data related checkpoints",
      groupid: 0,
      questions: [
        {
          qid: "0",
          question: "The data that is collected directly from individuals",
          consequence: "Check what rights you have to use data produced by other organisations, and whether any type of licence applies. Individuals may have rights over the data, or be contributing data that might identify or impact other individuals. As well as legal rights, consider the expectations of individuals and how comfortable they would feel with proposed data uses. For instance, data obtained from public sources eg social media sites or through web scraping should be used responsibly. Also, if you are planning to reuse or re-purpose data that you have collected from individuals but for a different use, you may need to go back and ask for permission or reassess your plans. ",
          subquestions: [
            {
              qid: "0_0",
              question: "The user interface does not clearly state or explain for what purpose the collected data is used",
              consequence: "Be transparent not only about purpose for data collection, but also about the research design, analysis tools, and algorithms you are using. Do not only communicate benefits. Communicate potential risks and harms too. This will help people meaningfully engage with you. Make sure you are communicating in short and accessible sentences ie not lengthy disclaimers and consents. Your communications should be developed and tested with people."
            }
          ]
        },
        {
          qid: "1",
          question: "The data that is collected includes personal or otherwise sensitive data",
          consequence: "There are particular risks when you are working with personal data, or thinking about publishing anonymised data as open data. Are you, or members of your team aware of any legal requirements or ethical frameworks that might apply to the collection, processing and use of data in your project? If working with personal data, you need to be aware of requirements within your context eg in the GDPR in the EU.",
          subquestions: [
            {
              qid: "1_0",
              question: "People could be negatively impacted by the collection or usage of the data",
              consequence: "Could the way that data is collected, used or shared cause harm or risk individuals being re-identified? Could it be used to target, profile or prejudice people, or unfairly restrict access (eg exclusive arrangements)? Also consider the broader social outcomes of your project, and how they could impact on people and human rights. For example, could certain analysis models or automated decision-making lead to discrimination against particular groups? Or would your project reduce access to services for more vulnerable customers? "
            }
          ]
        },
        {
          qid: "2",
          question: "The data will be shared with other organisations or published",
          consequence: "Are there conditions or agreements covering data sharing which might affect your project? When accessing or planning to share data with other organisations, this might be governed by an agreement or an industry code of practice.",
          subquestions: []
        },
        {
          qid: "3",
          question: "The data sources may have limitations, such as bias, incomplete data sets, etc. ",
          consequence: "Bias – whether intentional or not – always exists. It can be encoded into data. Sometimes biased behaviour can lead to illegal discriminatory practices. Bias can creep into your project anywhere decisions are made about the data to collect, the training data to use, and the analysis model. This includes a product design team’s decision to include (or fail to consider) a particular group's perspective eg the elderly. ",
          subquestions: []
        }
      ]
    }]
}


export default data