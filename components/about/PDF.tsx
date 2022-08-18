import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 60,
    color: '#272323',
    backgroundColor: '#eee8dd',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  left: {
    width: 'calc(75% - 15px)',
  },
  right: {
    width: 'calc(25% - 15px)',
  },
  h1: {
    marginBottom: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 40,
  },
  sectionTitle: {
    textDecoration: 'underline',
  },
  job: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 40,
  },
  jobHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobRole: {
    display: 'flex',
    flexDirection: 'column',
  },
  jobTitle: {
    fontWeight: 'bold',
  },
  jobDate: {
    fontWeight: 'medium',
  },
  jobDescriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  jobDescription: {
    marginTop: 10,
    lineHeight: 1.5,
  },
})

const PDF = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.left}>
            <View style={styles.section}>
              <Text style={styles.h1}>Ernesto Arellano</Text>
              <Text style={styles.h2}>Full Stack Web Developer</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About</Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
              <View style={styles.job}>
                <View style={styles.jobHead}>
                  <View style={styles.jobRole}>
                    <Text style={styles.jobTitle}>
                      Senior Full Stack Web Developer
                    </Text>
                    <Text>Big Rig Media</Text>
                  </View>
                  <View>
                    <Text style={styles.jobDate}>July 2015 - Present</Text>
                  </View>
                </View>
                <View style={styles.jobDescriptionContainer}>
                  <Text style={styles.jobDescription}>
                    Serve as a technical consultant between various stake
                    holders: project managers, designers, marketers, clients
                  </Text>
                  <Text style={styles.jobDescription}>
                    Translate high-profile design wireframes into readable,
                    maintainable code with PHP, JavaScript, TypeScript, React,
                    HTML and Tailwind CSS
                  </Text>
                  <Text style={styles.jobDescription}>
                    Promote and communicate new methodologies and technologies
                    to managers and team members to increase business efficiency
                  </Text>
                  <Text style={styles.jobDescription}>
                    Mentor and assist team members both personally and
                    professionally to reach personal and business objectives
                  </Text>
                  <Text
                    style={styles.jobDescription}
                  >{`Architect and conceptualize custom products like Xpress, the company's rapid website builder to cut build times by 60%`}</Text>
                  <Text>{`Contribute code and ideas to the company's proprietary SaaS application`}</Text>
                </View>
              </View>
              <View style={styles.job}>
                <View style={styles.jobHead}>
                  <View style={styles.jobRole}>
                    <Text style={styles.jobTitle}>
                      Full Stack Web Developer
                    </Text>
                    <Text>Big Rig Media</Text>
                  </View>
                  <View>
                    <Text style={styles.jobDate}>July 2013 - July 2015</Text>
                  </View>
                </View>
                <View style={styles.jobDescriptionContainer}>
                  <Text style={styles.jobDescription}>
                    Translate hundreds of Photoshop design wireframes into
                    readable, maintainable code with PHP, JavaScript, HTML and
                    Sass
                  </Text>
                  <Text style={styles.jobDescription}>
                    Promote the modernization of the development department by
                    using a modern WordPress development workflow with tools
                    like Grunt, Bower, Gulp, etc
                  </Text>
                  <Text style={styles.jobDescription}>
                    Advocate the modernization of the client onboarding process
                    by implementing methods like mood boards, content audits,
                    etc
                  </Text>
                </View>
              </View>
              <View style={styles.job}>
                <View style={styles.jobHead}>
                  <View style={styles.jobRole}>
                    <Text style={styles.jobTitle}>
                      Junior Full Stack Web Developer
                    </Text>
                    <Text>Conveyor Group</Text>
                  </View>
                  <View>
                    <Text style={styles.jobDate}>July 2011 - July 2013</Text>
                  </View>
                </View>
                <View style={styles.jobDescriptionContainer}>
                  <Text style={styles.jobDescription}>
                    Translate Photoshop design wireframes into readable,
                    maintainable code with PHP, JavaScript, HTML and CSS
                  </Text>
                  <Text style={styles.jobDescription}>
                    Built a custom business members directory with basic search
                    capabilities for Imperial Chamber of Commerce
                  </Text>
                  <Text style={styles.jobDescription}>
                    {`Contribute to company's custom in-house CMS, SiteFactory, by building out new features such as an image carousel module along with a voting results module`}
                  </Text>
                  <Text style={styles.jobDescription}>
                    Use version control to maintain all instances of SiteFactory
                  </Text>
                </View>
              </View>
              <View style={styles.job}>
                <View style={styles.jobHead}>
                  <View style={styles.jobRole}>
                    <Text style={styles.jobTitle}>Intern</Text>
                    <Text>Conveyor Group</Text>
                  </View>
                  <View>
                    <Text style={styles.jobDate}>May 2011 - July 2011</Text>
                  </View>
                </View>
                <View style={styles.jobDescriptionContainer}>
                  <Text style={styles.jobDescription}>
                    Translate Photoshop design wireframes into readable,
                    maintainable code with PHP, JavaScript, HTML and CSS
                  </Text>
                  <Text style={styles.jobDescription}>
                    Demonstrate ability to learn new concepts quickly by working
                    closely with lead developer to learn CodeIgniter
                  </Text>
                  <Text style={styles.jobDescription}>
                    Learn to work in a collaborative team setting
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.section}>
              <Text>Ernesto Arellano</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PDF
