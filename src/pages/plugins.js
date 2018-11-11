import React from 'react'
import Layout from '../components/layout'
import hero from '../styles/hero.module.scss'
import plugin from '../styles/plugin.module.scss'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import {Helmet} from "react-helmet";

const Plugins = (props) => {
  const pluginList = props.data.allMarkdownRemark;
  const { totalCount } = props.data.allMarkdownRemark;
  const listCount = `${totalCount} Plugin${
    totalCount === 1 ? "" : "s"
  }`
  
  return (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>BetterDocs | #1 Discord Plugins</title>
    </Helmet>
    <div className={plugin.pluginsContainer}
    >

    <section className={plugin.contentWrapper}
    >

      <div className={hero.heroPlugins}
      >
        <div className={hero.container}
        >
          <h2 className={hero.h2}
          >
          #1 Source for Discord Plugins!
          </h2> 
          <p className={hero.p}
          >
          Custom JS plugins made by our commuity!
          </p> 
        </div>
      </div>

      <div className={plugin.content}
        >
          <div className={plugin.wrapper}
          >
          <p>
            text
          </p>
        </div>
      </div>

    </section>


      <section className={plugin.sidebarSearch}
      >
        <div className={plugin.searchContainer}
        >
          <input 
          className={plugin.input}
          placeholder='Search plugins library'
          >
          </input>
          <div className={plugin.searchOutput}>
          {listCount}
          </div>
        </div>
        <div className={plugin.Results}
        >
        {pluginList.edges.map(({ node }, i) => (
          <Link 
          className={plugin.resultCard}
          activeClassName={plugin.active}
          to={'plugins' + node.frontmatter.path}
          key={node.id}
          >
            <div className={plugin.header}
            >
              <span className={plugin.title}
              >
              {node.frontmatter.title}
              </span>
              <span className={plugin.author}
              >
              {node.frontmatter.author}
              </span>
            </div>
            <div className={plugin.description}
            >
              <p className={plugin.p}
              >
                {node.excerpt}
              </p>
            </div>
          </Link>
          ))}
        </div>
      </section>

    </div>
  </Layout>
)
}

export default Plugins;

export const allQuery = graphql`
  query allQuery {
    allMarkdownRemark(filter: { collection: { eq: "plugins" } }) {
      group(field: collection) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
            excerpt
            html
            id
            frontmatter {
                path
                title
                author
                github
                download
                support
                layout
                }
            }
        }
    }
  }
`