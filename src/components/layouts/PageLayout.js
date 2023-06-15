import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import PropTypes from 'prop-types'

/**
 * 
 * @param {Object} props
 * @param {String} props.title
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
const PageLayout = ({ title, children }) => {
  const {siteConfig} = useDocusaurusContext()
  return (
    <Layout
      title={title || siteConfig.title}
    >
      <main>
        {children}
      </main>
    </Layout>
  )
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ])
}

export default PageLayout