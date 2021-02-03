const data = {
  groups: [
    {
      group: "Data-related checkpoints",
      groupid: "0",
      questions: [
        {
          qid: "0_0",
          question: "The data is collected from various different data sources",
          consequence: "Make sure you know the provenance and lineage of the data (origins of data, and how and why it was collected), especially when data is from an outside source. When working with multiple sources, it could be helpful to conduct a data inventory to help you identify, organise and describe the different data sources you collect, access and maintain",
          subquestions: []
        },
        {
          qid: "0_1",
          question: "You are not sure whether the data is biased or not",
          consequence: "Bias – whether intentional or not – always exists. It can be encoded into data. Sometimes biased behaviour can lead to illegal discriminatory practices. However, actively counteracting societal bias is often thought of as fair, for example positive discrimination policies to counter under-representation of certain groups. Making encoded bias and other limitations visible will help you identify those impacted, understand the consequences, and consider mitigations as necessary. <br> Bias can creep into your project anywhere decisions are made about the data to collect, the training data to use, and the analysis model. This includes a product design team’s decision to include (or fail to consider) a particular group's perspective eg the elderly. <br> Bias can be hard to detect, so it helps to be upfront about your project’s limitations ie who is not represented, whether and where you have used proxy data, and your basis for making assumptions. Convening people with different perspectives and backgrounds within your team, and through external engagement. might also help to flag potential limitations and address sources of bias.",
          subquestions: []
        },
        {
          qid: "0_2",
          question: "The data will be shared with other organisations or published",
          consequence: "Are there conditions or agreements covering data sharing which might affect your project? When accessing or planning to share data with other organisations, this might be governed by an agreement or an industry code of practice.",
          subquestions: []
        },
        {
          qid: "0_3",
          question: "The data is collected directly from individuals",
          consequence: "Individuals may have rights over the data, or be contributing data that might identify or impact other individuals. As well as legal rights, consider the expectations of individuals and how comfortable they would feel with proposed data uses. For instance, data obtained from public sources eg social media sites or through web scraping should be used responsibly.",
          subquestions: [
            {
              qid: "0_3_0",
              question: "The data will be reused or re-purposed",
              consequence: "You may need to go back and ask for permission or reassess your plans"
            },
            {
              qid: "0_3_1",
              question: "The purpose of the collection of data is not clearly communicated to the user",
              consequence: "Especially when planning to collect personal data, you need to be able to explain your intention and what you plan to do with the data e.g how long you will keep it. The data should be relevant to what you are trying to achieve. Do not only communicate benefits. Communicate potential risks and harms too. This will help people meaningfully engage with you. <br>Make sure you are communicating in short and accessible sentences ie not lengthy disclaimers and consents. Your communications should be developed and tested with people. "
            }
          ]
        },
        {
          qid: "0_4",
          question: "You have not yet reviewed the legal requirements and ethical codes that apply to your project",
          consequence: "Are you, or members of your team aware of any legal requirements or ethical frameworks that might apply to the collection, processing and use of data in your project? If working with personal data, you need to be aware of requirements within your context eg in the GDPR in the EU. <br> Also think beyond traditional data protection laws and consider the broader social outcomes of your project, and how they could impact on people and human rights. For example, could certain analysis models or automated decision-making lead to discrimination against particular groups? Or would your project reduce access to services for more vulnerable customers? <br> Beyond regulations, there may be other frameworks or codes of practice you  should consider. Many of these apply to specific sectors eg financial regulations, medical association codes, or guidelines for statisticians.",
          subquestions: []
        }
      ]
    }]
}


export default data