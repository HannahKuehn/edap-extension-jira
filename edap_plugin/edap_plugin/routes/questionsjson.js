const data = {
  questions: [
    {
      qid: "0",
      question: "The system collects, shares, or uses data",
      consequence: "Be transparent not only about purpose for data collection, but also about the research design, analysis tools, and algorithms you are using. Engaging with stakeholders throughout the process and factoring in their expectations can help reduce risks later on.",
      subquestions: [
        {
          qid: "0_0",
          question: "The data that is collected includes personal or otherwise sensitive data",
          consequence: "Privacy concerns, Could the way that data is collected, used or shared cause harm or risk individuals being re-identified? Could it be used to target, profile or prejudice people, or unfairly restrict access (eg exclusive arrangements)?"
        },
        {
          qid: "0_1",
          question: "The data sources may have limitations, such as bias, incomplete data sets, etc. ",
          consequence:"Bias – whether intentional or not – always exists. It can be encoded into data. Sometimes biased behaviour can lead to illegal discriminatory practices. Bias can creep into your project anywhere decisions are made about the data to collect, the training data to use, and the analysis model. This includes a product design team’s decision to include (or fail to consider) a particular group's perspective eg the elderly. "
        },
        {
          qid: "0_2",
          question: "The data will be shared with other organisations or published",
          consequence: "When sharing data, code of practices and privacy have to be considered"
        },
        {
          qid: "0_3",
          question: "There are existing ethical codes that apply to this sector or project",
          consequence:"Are you, or members of your team aware of any legal requirements or ethical frameworks that might apply to the collection, processing and use of data in your project? If working with personal data, you need to be aware of requirements within your context eg in the GDPR in the EU. Also think beyond traditional data protection laws and consider the broader social outcomes of your project, and how they could impact on people and human rights. For example, could certain analysis models or automated decision-making lead to discrimination against particular groups? Or would your project reduce access to services for more vulnerable customers? Beyond regulations, there may be other frameworks or codes of practice you  should consider. Many of these apply to specific sectors eg financial regulations, medical association codes, or guidelines for statisticians. Consider: the rule of law; human rights; data protection; IP and database rights; anti-discrimination laws; and data sharing, policies, regulation and ethics codes/frameworks specific to sectors (eg health, employment, taxation)."
        },
        {
          qid: "0_4",
          question: "The data that is collected directly from individuals",
          consequence:"Check what rights you have to use data produced by other organisations, and whether any type of licence applies. Individuals may have rights over the data, or be contributing data that might identify or impact other individuals. As well as legal rights, consider the expectations of individuals and how comfortable they would feel with proposed data uses. For instance, data obtained from public sources eg social media sites or through web scraping should be used responsibly. Also, if you are planning to reuse or re-purpose data that you have collected from individuals but for a different use, you may need to go back and ask for permission or reassess your plans. "
        }
      ]
    }
  ],
  title: "EDAP"
}

export default data;