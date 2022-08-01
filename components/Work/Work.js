import ProjectCard from '../HOC/Cards/Projects.card/Projects.card'

import data from '../../anthonydata'

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="sectionContainer">
        <div className="gridWrapper">
          <h1>Client Work</h1>
          <div className="grid">
            {data.work.map(work => (
              <ProjectCard
                key={work.id}
                heading={work.title}
                paragraph={work.para}
                list={work.list}
                imgUrl={work.imageSrc}
                projectLink={work.url}
                githubLink={work.githubLink}
                technology={work.technology}
              ></ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
