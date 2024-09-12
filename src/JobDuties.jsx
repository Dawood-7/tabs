const JobDuties = ({ duties}) => {
  return (
    <div>
        {duties.map((duty, index) => {
            return <p className="job-desc" key={index}>{duty}</p>
        })}
    </div>
  )
}
export default JobDuties