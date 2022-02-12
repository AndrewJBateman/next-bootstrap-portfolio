import Layout from '../components/Layout';
import Link from "next/link";

import { skills, experiences, projects } from "../data";

const Index = () => (
	<Layout>
		<header className="row">
			<div className="col-md-12">
				<div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
					<div className="row">
						<div className="col-md-4">
							<img src="profile.jpeg" alt="" className="img-fluid"/>
						</div>
						<div className="col-md-8">
							<h1>Andrew Bateman</h1>
              <h3>Fullstack Developer</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>

    <section className="row">
      <div className="py-2 col-md-4">
        <div className="card bg-light animate__animated animate__fadeInLeft">
          <div className="card-body">
            <h1>Skills</h1>

            {/* Skill Progress  */}
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-2 col-md-8">
        {/* Experience */}
        <div className="card bg-light animate__animated animate__fadeInRight">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sint excepturi ea explicabo. Illum suscipit illo, porro
                    quisquam voluptatem officiis fugiat vel animi aliquam
                    inventore rem. Quo laudantium temporibus cupiditate. Aut?
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/more">
              <a className="btn btn-light">More...</a>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Porfolio */}
    <section>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="my-2 col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>
              {projects.map(({ name, description, image }, index) => (
                <div className="p-2 col-md-4" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">More...</a>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-4 col-md-12">
                <div className="text-center">
                  <Link href="/portfolio">
                    <a className="btn btn-outline-light">More Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

	</Layout>
);

export default Index;