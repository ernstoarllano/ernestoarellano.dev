import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { useWindowSize } from 'hooks/useWindowSize'

const PDF = () => {
  const { width } = useWindowSize()
  const isDesktop = width >= 1024

  const styles = StyleSheet.create({
    page: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: isDesktop ? 60 : 30,
      color: '#272323',
      backgroundColor: '#eee8dd',
    },
    container: {
      display: 'flex',
      flexDirection: isDesktop ? 'row' : 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    left: {
      width: isDesktop ? 'calc(66.6666666667% - 30px)' : '100%',
    },
    right: {
      width: isDesktop ? 'calc(33.3333333333% - 30px)' : '100%',
    },
    h1: {
      marginBottom: isDesktop ? 30 : 10,
      fontSize: isDesktop ? 60 : 30,
      fontWeight: 700,
      color: '#d7684a',
    },
    h2: {
      fontSize: 20,
    },
    intro: {
      display: 'flex',
      flexDirection: 'column',
      flexBasis: '100%',
      marginBottom: 30,
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 40,
    },
    sectionTitle: {
      marginBottom: 20,
      fontSize: 20,
      fontWeight: 600,
      color: '#d7684a',
    },
    sectionDescription: {
      lineHeight: 1.5,
    },
    job: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 30,
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
      fontWeight: 700,
    },
    jobCompany: {
      fontSize: 14,
      fontWeight: 500,
    },
    jobDate: {
      fontSize: 14,
      fontWeight: 500,
    },
    jobDescriptionContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 20,
    },
    jobDescription: {
      marginTop: 15,
      lineHeight: 1.5,
    },
    info: {
      display: 'flex',
      flexDirection: isDesktop ? 'row' : 'column',
      flexWrap: 'nowrap',
      alignItems: isDesktop ? 'center' : 'flex-start',
      marginTop: 20,
    },
    infoText: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      marginTop: !isDesktop ? 10 : 0,
      marginRight: 20,
    },
    skill: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 30,
    },
    skillTitle: {
      marginBottom: 15,
      fontWeight: 600,
    },
  })

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.intro}>
            <Text style={styles.h1}>Ernesto Arellano</Text>
            <Text style={styles.h2}>Full Stack Web Developer</Text>
            <View style={styles.section}>
              <View style={styles.info}>
                <Text style={styles.infoText}>
                  <EnvelopeIcon className="w-6 h-6 mr-2 stroke-dawn" />
                  ernestoarellano@icloud.com
                </Text>
                <Text style={styles.infoText}>
                  <DevicePhoneMobileIcon className="w-6 h-6 mr-2 stroke-dawn" />
                  (760) 425-0710
                </Text>
                <Text style={styles.infoText}>
                  <GlobeAltIcon className="w-6 h-6 mr-2 stroke-dawn" />
                  ernestoarellano.dev
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.left}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Relevant Experience</Text>
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
                    <Text style={styles.jobCompany}>Big Rig Media</Text>
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
                    <Text style={styles.jobCompany}>Conveyor Group</Text>
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
                    <Text style={styles.jobCompany}>Conveyor Group</Text>
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
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skill}>
                <Text style={styles.skillTitle}>Programming Languages</Text>
                <Text>
                  PHP, JavaScript (ES6), TypeScript, HTML, CSS/Sass, GraphQL
                </Text>
              </View>
              <View style={styles.skill}>
                <Text style={styles.skillTitle}>Libraries & Frameworks</Text>
                <Text>Tailwind CSS, React, Next.js, Gatsby, jQuery</Text>
              </View>
              <View style={styles.skill}>
                <Text style={styles.skillTitle}>Tools & Platforms</Text>
                <Text>
                  Git, Gulp, Webpack, Netlify, Vercel, Heroku, Contentful,
                  Strapi, WordPress
                </Text>
              </View>
              <View style={styles.skill}>
                <Text style={styles.skillTitle}>Design</Text>
                <Text>Figma, Sketch, Photoshop</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PDF
