export default {
  name: 'certificates',
  title: 'Certificates',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'string'
    },
    {
      name: 'certificateId',
      title: 'CertificateId',
      type: 'string'
    },
    {
      name: 'certificateUrl',
      title: 'CertificateUrl',
      type: 'string'
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'issueDate',
      title: 'IssueDate',
      type: 'date'
    }
  ],
};