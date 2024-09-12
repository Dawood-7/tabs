import JobDuties from "./JobDuties";

const JobInfo = ({ data, currentItem }) => {
  // console.log(data[0])
  const { company, title, dates, duties } = data[currentItem];
  return (
    <section className="jobs-center">
      <h1>{title}</h1>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates} </p>
      <JobDuties duties={duties} />
    </section>
  );
};
export default JobInfo;
