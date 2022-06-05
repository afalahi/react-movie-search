# Answers to Tech Questions

## Question 1

*Hello,*

*I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:*

- *Records*
- *Indexing*

*I'm also struggling with understanding what types of metrics would be useful to include in the **"Custom Ranking."***
*Cheers,George*

### Answer 1

Hi George,

Thanks for reaching out! I'd be more than happy to help define these concepts for you.

Let's start with the Records and Indexing:

**Records**: A record at it's core is a JSON object. It can contain different attributes you'd like to search against. Think about your database, if you're storing products in your database, records are a representation of your database entities. You should be selective about what goes in the record, gathering solely information that’s useful for building a search experience.

I have included several in depth explanations about our records, record format, and how to send over records.

- [Algolia Records](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/#algolia-records)

- [What's in a Record](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/in-depth/what-is-in-a-record/)

- [Reducing Records Size](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/how-to/reducing-object-size/)

**Indexing**: An index is like a container of data optimized for search operations. If you're familiar with NoSQL database an index is like a collection, if you're more familiar with Relational databases, an index is similar to a table. Indexes contain records, configurations, logs and stats. So to clarify, you upload records to Algolia, and these records are stored under an index. Indexing isn't a one time thing, your database and data is dynamic and so are the Algolia indexes.

I have included a few links to our docs site that go deeper into indexing and how it's related to records.

- [Indexing Data](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/implementation-process/#indexing-data)

- [Algolia Index](https://www.algolia.com/doc/guides/sending-and-managing-data/prepare-your-data/#algolia-index)

And finally, **Custom Ranking**. Custom ranking helps you increase visibility for some of your most essential products, on top of Algolia’s default ranking strategy. It ensures that increasing visibility doesn’t prevent users from finding what they are looking for.

Custom ranking is a direct and powerful way to adapt Algolia to your business. **When you classify records with business metrics such as popularity or rating, your best products appear higher in search results**

So to sum the above, custom ranking empowers you to control which records appear in the first set of results. You can learn more about Custom Ranking [here](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/)

Please let me know if you have further questions, I'd be more than happy to jump on a quick zoom and discuss further.

Best,

Ali

## Question 2

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards,

Matt

### Answer 2

Hi Matt,

First of all, I'm truly sorry the new dashboard design isn't meeting your expectations. Second of all, we love all feedback and appreciate it when our customers submit their feedback whether we like or not :).

What I can do is bring your feedback to our Product Management team. I will update you with next steps once they review it. It can range from a meeting with one of our Product Designers, or asking for me details.

Meanwhile, I was wondering if it's possible for you to leverage the API to delete indexes? The majority of our customers leverage one of our SDKs to manage data in Algolia. For example, using the JavaScript SDK, you can delete several indexes a couple of commands

```js
// Primary indices only
client.listIndices().then(({ items }) => {
  const ops = items
    .filter(({ name, primary }) => !primary)
    .map(({ name }) => {
      return {
        indexName: name,
        action: 'delete',
      };
    });

  return client.multipleBatch(ops).then(({ objectIDs }) => {
    console.log(objectIDs);
  });
});

// Primary and replica indices
client.listIndices().then(({ items }) => {
  const { primaryOps, replicaOps } = items.reduce(
    (memo, { name, primary }) => {
      memo[primary ? 'primaryOps' : 'replicaOps'].push({
        indexName: name,
        action: 'delete',
      });
      return memo;
    },
    { primaryOps: [], replicaOps: [] }
  );
  return client
    .multipleBatch(primaryOps)
    .wait()
    .then(() => {
      console.log('Done deleting primary indices');
      return client.multipleBatch(replicaOps).then(() => {
        console.log('Done deleting replica indices');
      });
    });
});
```

If you're wanting to delete some indexes only, then the code below should help

```js
client.listIndices().then(({ items }) => {
  const ops = items
    .filter(({ name }) => name.includes('test_'))
    .map(({ name }) => {
      return {
        indexName: name,
        action: 'delete',
      };
    });

  client.multipleBatch(ops).then(({ objectIDs }) => {
    console.log(objectIDs);
  });
})
```

If JavaScript isn't your language of choice, [this article](https://www.algolia.com/doc/guides/sending-and-managing-data/manage-your-indices/how-to/delete-multiple-indices/#deleting-multiple-indices-using-the-api) includes snippets for other languages

More about managing Index via the API can be found [here](https://www.algolia.com/doc/api-client/methods/manage-indices/)

Additionally, if only needed to clear the Index objects, then this is the [recommended](https://www.algolia.com/doc/api-reference/api-methods/clear-objects/?client=javascript#examples) approach

I'll get back to you ASAP once I hear back from Product Management regarding the new Dashboard Design, meanwhile please let me know if the solutions I provided don't work for you, or if you need help with the client libraries.

Best,

Ali

## Question 3

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

### Answer 3

Hi Leo,

Excellent question, and while answering it correctly may require more questions on my end, I'll do my best to paint a general picture on how we've approached integrating Algolia with existing websites/applications.

Algolia provides SDKs/Helpers for all major languages, integration with web frameworks, and platforms such as Magento, Wordpress and Shopify.

These integrations aim to make the experience as minimal as possible so you don't have have to build it from scratch. The SDKs are flexible though, if you do want to explore customizing them.

Now, in order for me to offer relevant guides and tutorials, could you please tell me what your website is built on? Are you hosting it yourself, or is it a managed website?

Let me know if you have additional questions, or would like to jump on a call to discuss in more details.

Best,

Ali