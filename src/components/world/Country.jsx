
const Country = ({ info }) => (
	<li className="country">
		{info.name} in {info.continent} has a population of {info.population}.
	</li>
)
export default Country
