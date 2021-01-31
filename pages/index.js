import { useState, useEffect } from 'react';
export default function Home() {
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [payCyclesPerYear, setPayCyclesPerYear] = useState(26);
  const [annualRetirementAmount, setAnnualRetirementAmount] = useState(19500);
  const [contributionPercent, setContributionPercent] = useState(0);

  const round = (value) => Math.round(value * 100000) / 100000;
  const calculateContributionPercent = (annualIncome, payCyclesPerYear, annualRetirementAmount) => {
    const incomePerPayCycle = annualIncome / payCyclesPerYear;
    const contributionPerPayCycle = annualRetirementAmount / payCyclesPerYear;

    const contributionPercent = contributionPerPayCycle / incomePerPayCycle;
    return round(contributionPercent);
  }

  useEffect(() => {
    const newContributionPercent = calculateContributionPercent(annualIncome, payCyclesPerYear, annualRetirementAmount);
    setContributionPercent(newContributionPercent);
  }, [
    annualIncome,
    payCyclesPerYear,
    annualRetirementAmount
  ])
  return (
    <div className="flex items-center justify-center h-screen">
      <form>
        <h1 className="text-2xl font-bold mb-4">401k Contribution Calculator</h1>

        <div className="flex flex-col mb-4">
          <label htmlFor="annualIncome">Annual Income</label>
          <input
            name="annualIncome"
            onChange={e => setAnnualIncome(e.target.value)}
            step="500"
            type="number"
            value={annualIncome}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="payCyclesPerYear">Pay Cycles per Year</label>
          <input
            name="payCyclesPerYear"
            onChange={e => setPayCyclesPerYear(e.target.value)}
            type="number"
            value={payCyclesPerYear}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="annualRetirementAmount">Annual Retirement Amount</label>
          <input
            name="annualRetirementAmount"
            onChange={e => setAnnualRetirementAmount(e.target.value)}
            step="500"
            type="number"
            value={annualRetirementAmount}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="contributionPercent">Contribution Percent</label>
          <span className="border font-bold border-gray-500 py-2 px-3">
            {contributionPercent}
          </span>
        </div>
      </form>
    </div >
  )
}
