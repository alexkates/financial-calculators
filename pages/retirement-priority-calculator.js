import { useState, useEffect } from "react";

export default function RetirementPriorityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [annualRothIRALimit, setAnnualRothIRALimit] = useState(6000);
  const [annual401kLimit, setAnnual401kLimit] = useState(19500);
  const [savePercent, setSavePercent] = useState(0.15);
  const [employerMatchPercent, setEmployerMatchPercent] = useState(0.04);
  const [requiredAnnualSavings, setRequiredAnnualSavings] = useState(0);
  const [_401kEmployerMatchSavings, set401kEmployerMatchSavings] = useState(0);
  const [rothIRASavings, setRothIRASavings] = useState(0);
  const [_401kNonMatchSavings, set401kNonMatchSavings] = useState(0);
  const [individualBrokerageSavings, setIndividualBrokerageSavings] = useState(
    0
  );

  useEffect(() => {
    const newRequiredAnnualSavings = annualIncome * savePercent;
    setRequiredAnnualSavings(newRequiredAnnualSavings);

    let remaining = newRequiredAnnualSavings;

    const new401kEmployerMatchSavings =
      remaining < annual401kLimit * employerMatchPercent
        ? remaining
        : annual401kLimit * employerMatchPercent;
    remaining -= new401kEmployerMatchSavings;
    set401kEmployerMatchSavings(new401kEmployerMatchSavings);

    const newRothIRASavings =
      remaining < annualRothIRALimit ? remaining : annualRothIRALimit;
    remaining -= newRothIRASavings;
    setRothIRASavings(newRothIRASavings);

    const remaining401kSavings = annual401kLimit - new401kEmployerMatchSavings;
    const new401kNonMatchSavings =
      remaining < remaining401kSavings ? remaining : remaining401kSavings;
    remaining -= new401kNonMatchSavings;
    set401kNonMatchSavings(new401kNonMatchSavings);

    setIndividualBrokerageSavings(remaining);
  }, [
    annualIncome,
    annualRothIRALimit,
    annual401kLimit,
    savePercent,
    employerMatchPercent,
  ]);
  return (
    <div>
      <form>
        <h1 className="text-2xl font-bold mb-4">
          Retirement Priority Calculator
        </h1>

        <div className="flex flex-col mb-4">
          <label htmlFor="annualIncome">Annual Income</label>
          <input
            name="annualIncome"
            onChange={(e) => setAnnualIncome(e.target.value)}
            step="500"
            type="number"
            value={annualIncome}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="annualRothIRALimit">Annual Roth IRA Limit</label>
          <input
            name="annualRothIRALimit"
            onChange={(e) => setAnnualRothIRALimit(e.target.value)}
            step="500"
            type="number"
            value={annualRothIRALimit}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="annual401kLimit">Annual 401k Limit</label>
          <input
            name="annual401kLimit"
            onChange={(e) => setAnnual401kLimit(e.target.value)}
            step="500"
            type="number"
            value={annual401kLimit}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="savePercent">Save Percent</label>
          <input
            name="savePercent"
            onChange={(e) => setSavePercent(e.target.value)}
            step=".05"
            type="number"
            value={savePercent}
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="employerMatchPercent">Employer Match Percent</label>
          <input
            name="employerMatchPercent"
            onChange={(e) => setEmployerMatchPercent(e.target.value)}
            step=".01"
            type="number"
            value={employerMatchPercent}
          />
        </div>
        <hr className="m-4 text-col" />
        <div className="flex flex-col mb-4">
          <label htmlFor="requiredAnnualSavings">Required Annual Savings</label>
          <span className="border font-bold bg-gray-200 border-gray-500 py-2 px-3">
            {requiredAnnualSavings}
          </span>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="401kEmployerMatchSavings">
            401k Employer Match Savings
          </label>
          <span className="border font-bold bg-gray-200 border-gray-500 py-2 px-3">
            {_401kEmployerMatchSavings}
          </span>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="RothIRASavings">Roth IRA Savings</label>
          <span className="border font-bold bg-gray-200 border-gray-500 py-2 px-3">
            {rothIRASavings}
          </span>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="401kNonMatchSavings">
            401k Savings after Employer Match
          </label>
          <span className="border font-bold bg-gray-200 border-gray-500 py-2 px-3">
            {_401kNonMatchSavings}
          </span>
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="individualBrokerageSavings">
            Individual Brokerage Savings
          </label>
          <span className="border font-bold bg-gray-200 border-gray-500 py-2 px-3">
            {individualBrokerageSavings}
          </span>
        </div>
      </form>
    </div>
  );
}
