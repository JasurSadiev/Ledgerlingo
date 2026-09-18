/* Expansion lessons — third lessons for topics 27–29, 31, 32 */
import { mc, tf, dc, fill, je, match, order, addLessons } from "./authoring";

export function register(): void {

addLessons("t27", [
  ["Scenario: Which Offer Is Worth More?", "Real decisions framed as PV of single sums: buyouts, settlements, deferred bonuses, and 'pay now or pay later' choices.", [
    mc("A landlord offers: pay $50,000 now or $56,000 in 2 years for a lease buyout. Your borrowing rate is 8%. Which is cheaper in PV terms?", ["$50,000 now", "$56,000 later — PV = 56,000 × 0.8573 = $48,009", "Equal", "Depends on taxes only"], 1, "Deferring costs money only if the implied rate is below your rate."),
    fill("A supplier offers a $10,000 discount for prepaying a $200,000 order 6 months early. Implied annualized return? (2 decimals; simple interest on $190,000)", 10.53, "10,000 ÷ 190,000 = 5.26% per half-year ≈ 10.53% annualized — take it if you can borrow cheaper.", { unit: "%", tol: 0.1 }),
    fill("Deferred bonus: $30,000 today or $36,000 in 3 years. Rate of indifference? (nearest whole %)", 6, "1.2^(1/3) − 1 = 6.27% → ≈6%. Take the deferral only if your return is below ~6.3%.", { unit: "%", tol: 0.6 }),
    fill("A patent will produce a single expected licensing payment of $2,000,000 in 8 years. Risk-adjusted rate 14% (factor 0.3506). Value today?", 701200, "2,000,000 × 0.3506."),
    mc("A lawsuit settlement offers $400,000 now or $500,000 in 4 years. At 5% (factor 0.8227), PV of the deferred option is $411,350. Non-financial factors?", ["None", "Counterparty credit risk, tax timing, and personal liquidity may outweigh the $11,350 PV advantage", "Always defer", "Always take now"], 1, "PV is necessary but not sufficient."),
    fill("A zero-coupon bond with face $1,000 matures in 10 years; you paid $558. Yield to maturity? (nearest whole %)", 6, "558 = 1,000 × (1+r)^−10 → r ≈ 6%.", { unit: "%", tol: 0.5 }),
    mc("A company records a $1M environmental cleanup obligation due in 20 years at PV $377,000 (5%). Each year the liability…", ["Stays constant", "Grows by accretion expense (5% × carrying amount) until it reaches $1M", "Falls", "Is expensed in full"], 1, "Accretion, not interest, is the term for ARO-type liabilities."),
    tf("Doubling the discount rate halves the present value.", false, "PV = FV/(1+i)^n is not linear in i; e.g., 10 years at 5% → 0.614; at 10% → 0.386."),
  ]],
]);

addLessons("t28", [
  ["Scenario: Retirement & Payout Decisions", "Pension lump sum vs annuity, loan refinancing, and lease vs buy — annuity math applied to real choices.", [
    fill("Pension offer: $2,500/month for 25 years (300 payments) or a $400,000 lump sum. At 5% (monthly 0.4167%, PVOA factor 171.06), PV of the annuity?", 427650, "2,500 × 171.06.", { tol: 50 }),
    mc("Based on PV, which is better financially?", ["Lump sum", "Annuity — worth ≈ $427,650 vs $400,000 at 5%; but consider longevity, inflation protection, and insurer risk", "Equal", "Cannot compare"], 1, "At higher assumed returns (7%+) the lump sum may win."),
    fill("Refinance: remaining balance $180,000; current payment $1,500/mo, 15 years left. New loan 4.5%, 15 years (factor 130.72). New payment?", 1377, "180,000 ÷ 130.72 = 1,377.", { tol: 2 }),
    fill("Closing costs $4,500. Simple break-even in months?", 37, "4,500 ÷ (1,500 − 1,377 = 123) ≈ 36.6 → 37 months.", { unit: "mo", tol: 1 }),
    fill("Lease vs buy a delivery van: lease $650/month for 48 months (rate 6%, monthly factor 42.58) vs buy $30,000 with $8,000 residual value in 4 years (single-sum factor 0.7871). PV cost of leasing?", 27677, "650 × 42.58 = 27,677.", { tol: 20 }),
    fill("PV cost of buying?", 23703, "30,000 − 8,000 × 0.7871 = 23,703. Buying is cheaper on these numbers (before maintenance, tax, and mileage considerations).", { tol: 20 }),
    mc("A lottery winner takes 30 annual payments of $1M vs a $15M lump sum. Implied rate of the annuity option? (PVOA factor 15.0 for 30 periods)", ["≈3%", "≈5.1%", "≈8%", "≈10%"], 1, "Factor 15.0 at 30 periods ≈ 5.1%. If you can earn more than 5.1%, take the lump sum."),
    tf("A perpetuity growing at g% forever has PV = PMT ÷ (i − g), valid only when i > g.", true, "The Gordon growth model; basis for terminal values."),
  ]],
]);

addLessons("t29", [
  ["Scenario: Growth Projections & Debt Balloons", "FV applications for planning: compound growth of costs, balloon payments, deferred interest, and rule-of-thumb sanity checks.", [
    fill("Health insurance premiums $400,000/yr growing 7% annually. Cost in year 5? (factor 1.4026)", 561040, "400,000 × 1.4026."),
    fill("Interest-only loan of $500,000 at 6% with all interest deferred and compounded annually for 3 years. Balloon due at maturity?", 595508, "500,000 × 1.191016.", { tol: 5 }),
    fill("A customer owes $20,000 past due for 18 months; contract allows 1.5% per month compound late interest. Amount due?", 26147, "20,000 × 1.015^18 = 26,147.", { tol: 10 }),
    fill("Company's headcount is 80, growing 15%/yr. Headcount in 6 years? (factor 2.3131, round)", 185, "80 × 2.3131 ≈ 185 — drives office space and payroll planning.", { unit: "", tol: 1 }),
    mc("Sales tripled in 8 years. Approximate compound annual growth rate?", ["≈9%", "≈14.7%", "≈20%", "≈37.5%"], 1, "3^(1/8) − 1 = 14.7%. Rule of 114 for tripling: 114 ÷ 8 ≈ 14."),
    fill("A CD pays 4.8% compounded daily. Effective annual yield? (2 decimals)", 4.92, "(1 + 0.048/365)^365 − 1 = 4.92%.", { unit: "%", tol: 0.01 }),
    mc("Credit card APR 24% compounded monthly. Effective annual rate?", ["24%", "26.8%", "22%", "30%"], 1, "(1.02)^12 − 1 = 26.8%."),
    fill("A $2,000,000 balloon is due in 5 years. If the company invests $300,000/yr at year end at 6% (FVOA factor 5.6371), shortfall at maturity?", 308870, "2,000,000 − 300,000 × 5.6371 = 308,870.", { tol: 20 }),
    tf("For the same nominal rate, more frequent compounding always produces a higher effective annual rate.", true, "Continuous compounding is the limit: e^r − 1."),
  ]],
]);

addLessons("t31", [
  ["Scenario: Budgeting & Controlling SG&A", "Building an SG&A budget, zero-based budgeting, headcount planning, and analyzing SG&A leverage as the company scales.", [
    fill("Sales budget $12M. SG&A: sales commissions 4% of sales; salaries $1,800,000; marketing $600,000; rent $240,000; travel $150,000; software $110,000; other $200,000. Total SG&A?", 3580000, "480,000 + 3,100,000."),
    fill("SG&A as a percent of sales? (2 decimals)", 29.83, "3,580,000 ÷ 12,000,000.", { unit: "%", tol: 0.02 }),
    fill("Next year sales grow to $15M; variable SG&A stays 4%; fixed SG&A rises 5%. New SG&A % of sales? (2 decimals)", 25.7, "600,000 + 3,255,000 = 3,855,000 ÷ 15M = 25.70% — operating leverage from fixed SG&A.", { unit: "%", tol: 0.05 }),
    mc("Zero-based budgeting differs from incremental budgeting because…", ["It starts from zero cash", "Every expense must be justified from scratch each cycle rather than 'last year + 3%'", "It's only for nonprofits", "It ignores fixed costs"], 1, "Expensive to run; often applied to SG&A every few years."),
    fill("Headcount plan: 3 new sales reps hired April 1 at $90,000 salary + 25% burden (taxes/benefits) + $8,000 onboarding each. Year-1 cost?", 277125, "3 × (90,000 × 1.25 × 9/12 + 8,000) = 3 × 92,375."),
    mc("Marketing spend rose 40%; leads rose 12%; revenue rose 8%. Diagnosis?", ["Great", "Diminishing returns — customer acquisition cost is rising; analyze by channel before adding budget", "Cut all marketing", "Neutral"], 1, "CAC and payback by channel."),
    fill("Customer acquisition cost: marketing + sales cost $1,080,000; new customers 900. CAC?", 1200, "1,080,000 ÷ 900."),
    fill("Average customer gross profit $600/yr; average life 5 years. LTV ÷ CAC?", 2.5, "3,000 ÷ 1,200 = 2.5× (3× is a common target).", { unit: "x", tol: 0.05 }),
    tf("SG&A that scales slower than revenue is a sign of operating leverage and typically expands operating margins.", true, "Watch for underinvestment masquerading as efficiency."),
  ]],
]);

addLessons("t32", [
  ["Scenario: ABC for a Service Firm & Process Improvement", "ABC isn't just for factories. A regional accounting firm applies it to clients and uses activity analysis to eliminate non-value-added work.", [
    fill("Activity pools: client onboarding $120,000 (80 new clients); tax prep review $450,000 (3,000 review hours); client meetings $200,000 (1,000 meetings); billing/collections $90,000 (1,800 invoices). Review rate per hour?", 150, "450,000 ÷ 3,000."),
    fill("Client X (new this year): 12 review hours; 6 meetings; 4 invoices. ABC cost?", 4700, "1,500 + 1,800 + 1,200 + 200."),
    fill("Client X fees $6,000; direct staff time cost $2,100. Client margin after ABC costs?", -800, "6,000 − 2,100 − 4,700 = −800. This 'small' client loses money."),
    mc("Client X's manager says: 'But we bill $6,000 — it's profitable!' The ABC insight is…", ["She's right", "Onboarding and meeting costs are consumed disproportionately by small new clients; adjust pricing (minimum fees, onboarding fee) or streamline service", "Drop the client", "Ignore overhead"], 1, "Cost-to-serve drives pricing policy."),
    match("Classify activities (value-added vs non-value-added)", [["Preparing the tax return", "Value-added"], ["Re-requesting missing documents three times", "Non-value-added"], ["Reviewing for accuracy", "Value-added (business-value)"], ["Waiting for partner sign-off", "Non-value-added"], ["Correcting data entry errors", "Non-value-added"]], "Activity-based management targets NVA activities."),
    fill("Eliminating re-requests (portal + checklist) saves 400 staff hours at $60 loaded cost. Annual savings?", 24000, "400 × 60."),
    mc("Activity-based budgeting builds the budget from…", ["Last year's totals", "Forecasted activity volumes × activity rates (e.g., 90 new clients × onboarding cost)", "Revenue %", "Headcount only"], 1, "Links resources to workload drivers."),
    mc("The firm's partners resist ABC because 'it's too complex'. Pragmatic approach?", ["Abandon", "Start with 4–6 major activities and estimated time percentages (TDABC-lite); refine only where decisions depend on it", "Track every minute", "Hire consultants"], 1, "Good enough beats perfect."),
    tf("ABC information should replace the GAAP income statement.", false, "ABC supplements — it's a management tool; GAAP reporting continues as before."),
  ]],
]);

}
