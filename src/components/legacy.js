import React from 'react';
import {
	FaSass,
	FaHtml5,
	FaReact,
	FaMobileAlt,
	FaRocket,
    FaOsi,
    FaGithub
} from 'react-icons/fa';
import Img from "gatsby-image"

import './style.scss';
import Emoji from './emoji';

const AboutSection = ({ aboutPics }) => {
    console.log(aboutPics);
    
    return (
	<div>

		<section className="section gradientBg-green">
			<div className="container">
            
            <h1 className="title">About me</h1>
            <div className="tile is-ancestor">
                <div className="tile is-parent is-4">
                        <article className="tile is-child">
                            <figure className="image is-3by3" >
                                <Img className="rounded-pic" fluid={aboutPics[0].childImageSharp.fluid} alt="profile_pic" />
                            </figure>
						</article>
                </div>
                <div className="tile is-8">
                    <div className="content">
                        <h1 className="title is-size-4">JAMStack Solution</h1>
                        <p className="subtitle is-size-5">
                        {" "}
                        I live in New York city with my awesome wife, super dog, and adorable
                        cat. I enjoy simple things in life while playing soccer, watching
                        netflix, or walking my dog. Currently I work as an industrial
                        controls engineer while working on expanding my coding skillset.{" "}
                        </p>
                    </div>
                </div>
            </div>

            <div className="tile is-ancestor">
                <div className="tile is-6 is-parent">
                    <article className="tile notification is-child is-info">
                    <h3 className="title">Skills</h3>
                        <h3 className="title">Development</h3>
                        <p className="subtitle">Javascript, CSS, SQL, Node</p>
                        <h3 className="title">Frameworks & Libraries</h3>
                        <p className="subtitle">Express, Sequelize ORM, React, Gatsby, Rest API</p>
                        <h3 className="title">Database</h3>
                        <p className="subtitle">Sequlize ORM, sqlite</p>
                        <h3 className="title">Version Control</h3>
                        <p className="subtitle">Git</p>
                    </article>
                    
                </div>
                <div className="tile notification is-6 is-parent">
                <article className="tile is-child is-info">
                <h3 className="title">Education</h3>
                    <h4 className="title">Treehouse</h4>
                    <p className="subtitle">- online Fullstack Javascript techdegree Dec 2019 - May 2020</p>
                    <h4 className="title">University of the Pacific</h4>
                    <p className="subtitle"> - B.S.E.E in 2012</p>
                </article>
                    
                </div>
            </div>

            <div className="tile is-ancestor">
                <div className="tile is-8">
                    <div className="content">
                        <h1 className="title is-size-4">JAMStack Solution</h1>
                        <p className="subtitle is-size-5">
                        {" "}
                        I was born and raised in Portland, OR, moved to Miami in 2019, and
                        now currently residing in New York City. I have been working as an
                        Instrumentation and controls engineer in both controls design and
                        system integration within the Industrial setting for 8 years.{" "}
                        </p>
                        <p className="subtitle is-size-5">
                        I've discovered a passion for coding, and decided to pursuit my
                        new interests by learning full stack javascript development. I am
                        excited to say that I am now actively seeking an opportunity to
                        pursuit my newly discovered passion as a JavaScript Developer.
                        Thank you for visiting my site!{" "}
                        </p>
                    </div>
                </div>
                <div className="tile is-parent is-4">
                        <article className="tile is-child">
                            <figure className="image is-2by2" >
                                <Img className="rounded-pic" fluid={aboutPics[1].childImageSharp.fluid} alt="profile_pic" />
                            </figure>
						</article>
                </div>
                
            </div>
				<div className="columns is-multiline">
					<div className="column is-one-third">
                        <div className="content">
                            <figure className="image">
                                <Img fluid={aboutPics[0].childImageSharp.fluid} alt="profile_pic" />
                            </figure>
                        </div>
					</div>
					<div className="column is-two-thirds">
								<div className="content">
									<h1 className="title is-size-4">JAMStack Solution</h1>
									<p className="subtitle is-size-5">
                                    {" "}
                                    I live in New York city with my awesome wife, super dog, and adorable
                                    cat. I enjoy simple things in life while playing soccer, watching
                                    netflix, or walking my dog. Currently I work as an industrial
                                    controls engineer while working on expanding my coding skillset.{" "}
									</p>
								</div>
					</div>
					
					<div className="column is-one-third">
                        <div className="content">
                            <h1 className="title is-size-4">Responsive Design</h1>
                            <p className="subtitle is-size-5">
                                Bulma is based on the Flexbox model and built with Sass. The
                                simplest grid system Just add columns, they will resize
                                themselves, like this website.
                            </p>
                        </div>
					</div>

					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaOsi size="fa-2x" className="has-text-primary" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Open Source</h1>
									<p className="subtitle is-size-5">
										This starter kit is MIT Licensed. Need I say more?
										<Emoji emoji="🤑" />
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaRocket size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Starter Kit</h1>
									<p className="subtitle is-size-5">
										This starter kit is target to developers who are looking
										forward to use Bulma along with GatsbyJS. You can read more
										in the <a href="https://gatsbyjs.org">documentation</a> on
										how to get started.
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	</div>
	)
	
};



export default AboutSection;
