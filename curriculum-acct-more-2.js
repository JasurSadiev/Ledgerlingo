/* Expansion lessons — Accounting topics 12–22 */
(function ({ mc, tf, dc, fill, je, match, order, addLessons }) {

addLessons("t12", [
  ["Scenario: Multi-Step Income Statement for a Retailer", "Outdoor Depot's accounts. Build the multi-step P&L: net sales → gross profit → operating income → pretax → net income, then EPS.", [
    fill("Gross sales 4,200,000; returns 120,000; discounts 30,000. Net sales?", 4050000, "4,200 − 150 = 4,050,000."),
    fill("Beginning inventory 480,000; purchases 2,600,000; freight-in 45,000; purchase returns 60,000; ending inventory 510,000. COGS?", 2555000, "480 + 2,600 + 45 − 60 − 510 = 2,555,000."),
    fill("Gross profit?", 1495000, "4,050,000 − 2,555,000."),
    fill("Selling expenses: store wages 520,000; advertising 90,000; store rent 210,000; depreciation—store 60,000. Admin: office salaries 180,000; insurance 25,000; office depreciation 15,000. Operating income?", 395000, "1,495,000 − 880,000 − 220,000 = 395,000."),
    fill("Other: interest expense 48,000; gain on sale of equipment 12,000; interest income 3,000. Pretax income?", 362000, "395 − 48 + 12 + 3 = 362,000."),
    fill("Tax rate 21%. Net income?", 285980, "362,000 × 79% = 285,980."),
    fill("Weighted shares 200,000; preferred dividends $10,000. Basic EPS? (2 decimals)", 1.38, "(285,980 − 10,000) ÷ 200,000 = 1.38.", { tol: 0.01 }),
    mc("Freight-in appears in…", ["Selling expenses", "Cost of goods sold (inventoriable cost)", "Other expense", "Admin"], 1, "Freight-out is selling."),
  ]],
  ["Revenue Recognition Cases (ASC 606)", "Real fact patterns: bundles, variable consideration, principal vs agent, licenses, bill-and-hold, contract modifications.", [
    fill("Gym sells a 12-month membership for $600 plus an enrollment fee of $120 that provides no separate benefit. Revenue per month?", 60, "Nonrefundable upfront fees with no distinct good are recognized over the service period: 720 ÷ 12 = $60."),
    mc("Consultant earns $100,000 fixed plus a $50,000 bonus if the project finishes by June (60% likely). Transaction price using the most-likely-amount method?", ["$100,000", "$150,000", "$130,000", "$125,000"], 1, "Binary outcome → most likely amount = 150,000, but only if it's PROBABLE no significant reversal occurs (constraint). If uncertain, exclude the bonus."),
    mc("Manufacturer ships goods with a right of return; expects 8% returns. At sale, record…", ["100% revenue", "92% revenue + refund liability 8% + an asset for the right to recover returned goods", "0% until return period ends", "50%"], 1, "Variable consideration with refund liability."),
    mc("Travel site collects $1,000 for a hotel booking, remits $850 to the hotel, and doesn't control the room. Revenue?", ["$1,000", "$150 (agent)", "$850", "$0"], 1, "Control indicator: primary responsibility, inventory risk, pricing discretion."),
    mc("Software license (functional IP) delivered Jan 1 with 1-year PCS. License revenue is recognized…", ["Over 12 months", "At a point in time (Jan 1) when control transfers; PCS over time", "When paid", "At contract end"], 1, "Functional IP = point in time; symbolic IP (brands, franchises) = over time."),
    mc("Customer asks the seller to hold purchased goods (bill-and-hold). Revenue may be recognized only if…", ["The invoice is issued", "Substantive reason exists, goods are identified separately, ready for transfer, and seller can't use/redirect them", "Payment is received", "Never"], 1, "All four criteria."),
    mc("A construction contract ($5M, 3 years) uses cost-to-cost input method. Costs to date $2.4M; total estimated $4M. Cumulative revenue?", ["$2.4M", "$3.0M", "$5.0M", "$1.6M"], 1, "60% complete × 5M."),
    mc("Contract modification adds 200 more units at standalone price. Treat as…", ["Modification of the existing contract", "A separate contract (distinct goods at standalone selling price)", "Cumulative catch-up", "Termination"], 1, "Prospective as new contract."),
    mc("A $500,000 contract requires a 2-year payment term at 0% when the customer's borrowing rate is 8%. Revenue recorded?", ["$500,000", "PV ≈ $428,700 as revenue; the rest is interest income over 2 years (significant financing component)", "$540,000", "$400,000"], 1, "Practical expedient only if ≤ 1 year."),
    tf("Costs to obtain a contract (sales commissions) with an amortization period over 1 year must be capitalized under ASC 340-40.", true, "Amortize over the period of benefit, including expected renewals."),
  ]],
  ["Expense Classification & Presentation", "Where things go on the P&L changes ratios and analyst conclusions. Know the distinctions: COGS vs operating; operating vs non-operating; discontinued ops; unusual items.", [
    match("Classify on a manufacturer's multi-step income statement", [["Factory depreciation", "COGS (via inventory)"], ["Sales commissions", "Selling expense"], ["CFO salary", "General & administrative"], ["Loss on lawsuit settlement", "Other expense (non-operating) or separately disclosed"], ["Interest income on investments", "Other income"], ["R&D salaries", "Operating expense — R&D"]], "Classification consistency period over period is essential."),
    mc("A company sells its entire European division (a separate major line of business). Presentation?", ["Within operating results", "Discontinued operations, net of tax, below continuing operations; prior periods restated", "Other expense", "OCI"], 1, "Strategic shift with major effect → discontinued ops (ASU 2014-08)."),
    mc("A hurricane destroys a warehouse: $2M loss, $1.5M insurance recovery. Presentation?", ["Extraordinary item", "Loss within continuing operations (separately disclosed if material); recovery recognized when realizable — gain contingency rules if recovery > loss", "OCI", "Prior period"], 1, "Extraordinary classification was eliminated."),
    mc("Shipping and handling costs incurred after control transfers…", ["Must be a separate performance obligation", "May be treated as fulfillment costs (policy election) — expensed, not revenue", "Reduce revenue", "Are capitalized"], 1, "ASC 606 practical expedient."),
    mc("Restructuring charges (severance, facility exit) belong in…", ["COGS", "Operating expenses, separately presented/disclosed", "Discontinued ops", "OCI"], 1, "Recurring 'non-recurring' charges are an earnings-quality issue."),
    mc("Income tax expense on the income statement includes…", ["Only taxes paid", "Current + deferred tax expense; intraperiod allocation to discontinued ops/OCI", "Payroll taxes", "Sales taxes"], 1, "Payroll and sales taxes are operating expenses/liabilities, not income tax."),
    mc("Gross vs net presentation of sales taxes collected is…", ["Required gross", "A policy election (ASU 2016-12) — most present net (exclude from revenue)", "Required net", "Prohibited"], 1, "Disclose the policy."),
    tf("Bad debt expense should be presented as a reduction of revenue.", false, "Under ASC 606 credit losses are an expense (ASC 326); only price concessions reduce revenue."),
  ]],
]);

addLessons("t13", [
  ["Scenario: Full Indirect-Method Statement", "Two balance sheets and an income statement. Prepare the complete statement of cash flows — every line.", [
    fill("NI 180,000; depreciation 65,000; amortization 5,000; loss on sale of equipment 4,000; A/R +22,000; inventory −15,000; prepaid +3,000; A/P +18,000; accrued liabilities −7,000; deferred revenue +9,000. Cash from operations?", 264000, "180 + 65 + 5 + 4 − 22 + 15 − 3 + 18 − 7 + 9 = 264,000."),
    fill("Equipment (cost) rose from 500,000 to 620,000; equipment costing 40,000 (acc dep 30,000) was sold for 6,000. Purchases of equipment?", 160000, "500 + P − 40 = 620 → P = 160,000."),
    fill("Investing: capex 160,000 outflow; equipment sale proceeds 6,000; purchase of investments 25,000. Net investing?", -179000, "−160 + 6 − 25 = −179,000."),
    fill("Financing: long-term debt issued 100,000; debt repaid 45,000; dividends paid 50,000; treasury stock purchased 20,000. Net financing?", -15000, "100 − 45 − 50 − 20 = −15,000."),
    fill("Beginning cash 92,000. Ending cash?", 162000, "92 + 264 − 179 − 15 = 162,000."),
    mc("Dividends DECLARED were 60,000 but Dividends Payable rose 10,000. Cash dividends paid?", ["60,000", "50,000", "70,000", "10,000"], 1, "Declared − increase in payable."),
    mc("Accumulated depreciation: beginning 200,000; ending 235,000; sold asset's acc dep 30,000. Depreciation expense implied?", ["35,000", "65,000", "5,000", "95,000"], 1, "200 + D − 30 = 235 → D = 65,000 — ties to the income statement."),
    fill("Supplemental disclosure: interest paid = interest expense 30,000 + decrease in interest payable 2,000?", 32000, "Paying down the payable means cash > expense."),
  ]],
  ["Cash Flow Traps & Analysis", "Where preparers go wrong: classification of specific items, noncash transactions, and reading operating cash flow quality.", [
    match("Classify under U.S. GAAP", [["Cash paid for interest on bonds", "Operating"], ["Cash received from sale of trading securities (held for trading)", "Operating"], ["Principal payments on finance lease", "Financing"], ["Interest portion of finance lease payment", "Operating"], ["Payments on operating lease", "Operating"], ["Proceeds from insurance on destroyed building", "Investing"]], "Lease classification drives cash-flow presentation."),
    mc("Capitalized software development costs paid in cash are…", ["Operating outflow", "Investing outflow", "Financing", "Noncash"], 1, "Capitalized = investing (a common way to flatter operating cash flow)."),
    mc("Company converts $1M of bonds into common stock. Cash flow statement shows…", ["Financing inflow and outflow", "Nothing in the body; disclosed as a noncash financing activity", "Operating", "Investing"], 1, "No cash moved."),
    mc("Stock issued to acquire a business (no cash). Presentation?", ["Investing outflow", "Noncash investing/financing disclosure; any cash acquired is shown net", "Operating", "Financing inflow"], 1, "Business combinations: 'cash paid, net of cash acquired'."),
    mc("A company delays paying vendors from 30 to 90 days in Q4. Operating cash flow…", ["Falls", "Rises temporarily — a low-quality, one-time boost", "Unchanged", "Becomes investing"], 1, "Watch DPO spikes."),
    mc("Sale of receivables to a factor (true sale). Presentation?", ["Financing inflow", "Operating (collections of receivables)", "Investing", "Noncash"], 1, "Cash from receivables is operating regardless of who pays — but disclose factoring programs."),
    mc("Supplier finance (reverse factoring) programs must be disclosed under ASU 2022-04 because they can…", ["Increase revenue", "Mask financing as operating cash flow and stretch payables", "Reduce taxes", "Change EPS"], 1, "Key terms and outstanding amounts disclosed."),
    fill("Operating cash flow $264,000; capex $160,000; dividends $50,000. Free cash flow after dividends?", 54000, "264 − 160 − 50."),
    tf("Bank overdrafts are always classified as financing under U.S. GAAP.", true, "Unlike IFRS where they may be part of cash if integral to cash management."),
  ]],
]);

addLessons("t14", [
  ["Scenario: Benchmark Two Competitors", "Same industry, different strategies. Compute and compare, then decide which is the better credit and which is the better investment.", [
    fill("Alpha: sales 5,000; NI 400; assets 4,000; equity 2,000. Beta: sales 5,000; NI 250; assets 2,500; equity 2,000. Alpha's ROE? (%)", 20, "400 ÷ 2,000.", { unit: "%", tol: 0.1 }),
    fill("Beta's ROE? (%)", 12.5, "250 ÷ 2,000.", { unit: "%", tol: 0.1 }),
    fill("Alpha's equity multiplier? (2 decimals)", 2, "4,000 ÷ 2,000.", { unit: "x", tol: 0.01 }),
    fill("Beta's asset turnover? (2 decimals)", 2, "5,000 ÷ 2,500.", { unit: "x", tol: 0.01 }),
    mc("Alpha's higher ROE comes mostly from…", ["Better margins", "Leverage (multiplier 2.0 vs 1.25) plus higher net margin (8% vs 5%)", "Turnover", "Lower taxes"], 1, "Decompose: Alpha 8% × 1.25 × 2.0 = 20%; Beta 5% × 2.0 × 1.25 = 12.5%."),
    mc("Alpha's interest coverage is 2.1×; Beta's is 9×. As a lender you prefer…", ["Alpha", "Beta — far more cushion", "Same", "Neither"], 1, "Lenders prioritize safety over ROE."),
    mc("Alpha's P/E is 22; Beta's is 14; industry 16. Alpha may be…", ["Cheap", "Priced for growth — or overvalued; check growth (PEG ratio) and earnings quality", "Bankrupt", "Fairly priced by default"], 1, "P/E alone doesn't say 'expensive'."),
    fill("Alpha: current assets 1,200; inventory 500; current liabilities 800. Quick ratio? (2 decimals)", 0.88, "(1,200 − 500) ÷ 800 = 0.875.", { unit: "x", tol: 0.01 }),
    mc("Beta's gross margin fell from 42% to 36% while Alpha's held at 41%. Likely story?", ["Beta cut prices to hold share or faced input-cost inflation without pass-through", "Beta is more efficient", "Accounting change", "Nothing"], 0, "Margin trends reveal competitive position."),
  ]],
  ["Ratio Red Flags & Manipulation", "Ratios can be gamed. Learn the tricks and the counter-checks an experienced analyst uses.", [
    mc("Days sales outstanding computed on year-end A/R looks great because the company factored $5M of receivables on Dec 30. Counter-check?", ["Accept", "Compute DSO on average quarterly balances and read the factoring disclosure", "Use inventory", "Ignore"], 1, "Window dressing at period end."),
    mc("Inventory turnover improved sharply after the company switched to consignment arrangements with suppliers. Reality?", ["True efficiency", "Inventory moved off-balance-sheet — economic exposure may be unchanged; read the commitments note", "Fraud", "Higher sales"], 1, "Understand the business model change."),
    mc("A company's ROE is 45% with equity of $1M and debt of $30M. Interpretation?", ["Superb", "ROE is nearly meaningless with a tiny equity base — look at ROIC/ROA and leverage risk", "Bankrupt", "Average"], 1, "Small denominators exaggerate."),
    mc("EBITDA margin is 30% but operating cash flow is negative for 3 years. Concern?", ["None", "EBITDA excludes working capital consumption, capex, interest, taxes — 'EBITDA is not cash'", "Too much depreciation", "Tax issue"], 1, "Reconcile EBITDA to CFO."),
    mc("Times interest earned improved because the company capitalized interest on a construction project. Effect?", ["Genuine improvement", "Cosmetic — capitalized interest is still a cash cost; add it back for coverage analysis", "Fraud", "Lower debt"], 1, "ASC 835-20 capitalized interest."),
    mc("Company changed from LIFO to FIFO. Comparing this year's gross margin to last year requires…", ["Nothing", "Using restated prior-year figures (retrospective application)", "Ignoring inventory", "Using tax returns"], 1, "Apples to apples."),
    mc("Altman Z-score below 1.8 for a manufacturer suggests…", ["Strong health", "Elevated bankruptcy risk (distress zone)", "High growth", "Nothing"], 1, "Z = 1.2X1 + 1.4X2 + 3.3X3 + 0.6X4 + 1.0X5."),
    tf("Common-size statements (each line as % of sales or total assets) neutralize size differences between companies.", true, "Vertical analysis is the first step in benchmarking."),
  ]],
]);

addLessons("t15", [
  ["Scenario: A Messy Reconciliation", "Twelve items, several traps. Build both sides, find the difference, and record the entries.", [
    fill("Bank statement ending balance 41,320. Deposits in transit: 3,900 and 1,250. Outstanding checks: #2210 800; #2214 2,150; #2215 95; #2219 1,600. A check for 460 written by another company was charged to our account. Adjusted bank balance?", 42285, "41,320 + 5,150 − 4,645 + 460 = 42,285."),
    fill("Book balance 40,970. Bank items not yet recorded: automatic loan payment 1,200 (principal 1,050 + interest 150); service charge 30; interest earned 15; NSF check 900; ACH customer payment received 2,400; check #2208 for office supplies written as 730 but recorded in the books as 370. Adjusted book balance so far?", 40895, "40,970 − 1,200 − 30 + 15 − 900 + 2,400 − 360 = 40,895. That's $1,390 short of the adjusted bank balance — something is still missing (next question)."),
    mc("Your adjusted book balance is $40,895 and adjusted bank is $42,285 — a $1,390 difference. Which is the most efficient next step?", ["Plug it to Misc Expense", "Search for a deposit or receipt of exactly $1,390 recorded by the bank but not in the books (or a $695 item on the wrong side); scan the statement for that amount", "Restart", "Adjust the bank"], 1, "You find a $1,390 wire from a customer not yet recorded → book side becomes 42,285. Reconciled."),
    je("Record the automatic loan payment ($1,050 principal, $150 interest).", ["Notes Payable", "Interest Expense", "Cash", "Loan Expense"], ["Notes Payable", "Interest Expense"], ["Cash"], "Split principal and interest."),
    je("Record the ACH customer payment of $2,400 and the $1,390 wire (both on account).", ["Cash", "Accounts Receivable", "Sales", "Unearned Revenue"], ["Cash"], ["Accounts Receivable"], "Dr Cash 3,790 / Cr A/R 3,790."),
    je("Correct check #2208 (office supplies): recorded 370, actual 730.", ["Office Supplies Expense", "Cash", "Accounts Payable", "Bank Fees"], ["Office Supplies Expense"], ["Cash"], "Under-recorded by 360."),
    je("Record NSF check $900 plus a $25 bank fee you will charge back to the customer.", ["Accounts Receivable", "Cash", "Bank Fees Expense", "Bad Debts Expense"], ["Accounts Receivable"], ["Cash"], "Dr A/R 925 / Cr Cash 925 (bank charged 25 fee)."),
    mc("The $460 check from another company charged to your account requires…", ["A journal entry", "A call to the bank to correct; it's a bank-side reconciling item only", "Writing it off", "A refund to the other company"], 1, "Bank error."),
    tf("Check #2210 for $800 has been outstanding for 9 months. It should simply stay on the outstanding list indefinitely.", false, "Investigate: reissue or void; stale checks may be unclaimed property (escheat) after the statutory dormancy period."),
  ]],
  ["Cash Controls & Fraud Detection", "The reconciliation is your best fraud detector. Learn schemes (lapping, kiting, forged endorsements) and the controls that stop them.", [
    mc("Lapping is…", ["Depositing late", "Stealing customer A's payment and covering it with customer B's later payment, and so on", "Bank error", "Overdraft"], 1, "Detect: customer complaints, delayed postings, compare deposit slip details to A/R postings."),
    mc("Check kiting exploits…", ["Float between two bank accounts by writing checks back and forth to inflate balances", "NSF fees", "Interest", "Lockboxes"], 0, "Detect: many transfers near period end, frequent same-amount deposits/withdrawals between accounts."),
    mc("Which control MOST directly prevents a bookkeeper from writing checks to themselves?", ["Monthly reconciliation by the same bookkeeper", "Bank statements delivered unopened to the owner + dual signatures over a threshold + positive pay", "Pre-numbered checks", "Petty cash"], 1, "Custody and recording must be separated; owner review is essential."),
    mc("Positive pay is…", ["A bonus", "A bank service matching presented checks to the company's issued-check file; exceptions require approval", "A payroll method", "An ACH type"], 1, "Highly effective against forged/altered checks."),
    mc("A reconciliation shows an unusual number of 'voided' checks that were actually cashed. Scheme?", ["Kiting", "Fraudulent disbursements concealed by voiding in the system", "Lapping", "Skimming"], 1, "Compare void list to cleared checks."),
    mc("Skimming differs from larceny because skimming is…", ["Larger", "Theft of cash BEFORE it's recorded (off-book) — hardest to detect via reconciliation", "After recording", "Only by managers"], 1, "Detect via analytics: gross margin declines, register variance, customer complaints."),
    mc("A lockbox arrangement helps because…", ["It's cheaper", "Customer payments go directly to the bank — employees never touch checks", "It speeds payroll", "It eliminates A/R"], 1, "Removes custody from staff."),
    tf("A reconciliation performed by the person who handles cash is still valuable if reviewed by the owner.", true, "Review is a compensating control in small businesses — but independent preparation is better."),
  ]],
]);

addLessons("t16", [
  ["Scenario: Year-End Receivables Review", "Coastal Supply's A/R aging, customer disputes, and a bankrupt customer. Determine the allowance, entries, and disclosure.", [
    fill("Aging: 0–30 days 620,000 @ 0.5%; 31–60 180,000 @ 3%; 61–90 75,000 @ 10%; 91–120 30,000 @ 30%; >120 22,000 @ 70%. Required allowance?", 40400, "3,100 + 5,400 + 7,500 + 9,000 + 15,400 = 40,400."),
    mc("Before adjusting, you learn one customer in the >120 bucket ($12,000) filed Chapter 7 with no assets. Best treatment?", ["Leave in the 70% bucket", "Write off the $12,000 specifically, then apply percentages to the remaining $10,000 in that bucket", "Ignore", "Move to current"], 1, "Specific identification before the formula."),
    fill("After the write-off, the >120 bucket is $10,000 @ 70%. New required allowance?", 32000, "3,100 + 5,400 + 7,500 + 9,000 + 7,000 = 32,000."),
    fill("Allowance before adjustment: 18,000 credit; then the 12,000 write-off reduces it to 6,000 credit. Bad debt expense to reach 32,000?", 26000, "32,000 − 6,000."),
    je("Record the $12,000 write-off.", ["Allowance for Doubtful Accounts", "Accounts Receivable", "Bad Debts Expense", "Loss on Bankruptcy"], ["Allowance for Doubtful Accounts"], ["Accounts Receivable"], "Against the allowance."),
    mc("A customer disputes a $9,000 invoice claiming goods were defective; you agree to a 50% credit. Entry?", ["Bad debt", "Dr Sales Returns & Allowances 4,500 / Cr A/R 4,500", "Write off 9,000", "Nothing"], 1, "Disputes are revenue adjustments, not credit losses."),
    mc("One customer is 40% of total A/R. Disclosure?", ["None", "Concentration of credit risk disclosure (ASC 275/825)", "Write off", "Reclassify"], 1, "Concentrations are a required disclosure."),
    fill("Net realizable value of A/R after all entries: gross 927,000 − 12,000 write-off; allowance 32,000.", 883000, "915,000 − 32,000."),
  ]],
  ["Receivables Financing & Special Cases", "Factoring with recourse, pledging, credit card receivables, notes with imputed interest, and long-term receivables.", [
    mc("Factoring WITH recourse and the transfer meets sale criteria (ASC 860). The company records…", ["A loan", "A sale, plus a recourse liability for expected credit losses", "Nothing", "Revenue"], 1, "Recourse obligation at fair value."),
    mc("Factoring where the company retains effective control (can repurchase) is…", ["A sale", "A secured borrowing — receivables stay on the books; record a liability", "Off-book", "Revenue"], 1, "Substance over form."),
    fill("Pledged receivables of $500,000 as collateral for a $350,000 loan. A/R shown on the balance sheet?", 500000, "Pledging doesn't remove receivables; disclose the pledge."),
    fill("Credit card sale of $2,000 with a 2.5% processor fee. Cash (or receivable from processor) recorded?", 1950, "Dr Cash 1,950; Dr Credit Card Expense 50; Cr Sales 2,000."),
    mc("A company sells equipment for a 3-year, non-interest-bearing $60,000 note when the market rate is 9%. Record the receivable at…", ["$60,000", "PV ≈ $46,330 with the discount amortized as interest revenue", "$54,000", "$40,000"], 1, "Imputed interest (ASC 835-30)."),
    mc("A receivable from a customer due in 3 years is classified as…", ["Current", "Noncurrent (unless within the operating cycle)", "Investment", "Inventory"], 1, "Long-term receivables."),
    mc("Interest on an overdue account is recognized…", ["Never", "As interest income when it's collectible (not if the account itself is doubtful)", "As sales", "Only when paid"], 1, "Don't accrue interest on doubtful accounts."),
    tf("Under CECL (ASC 326), a company must consider forecasted economic conditions — not just historical loss rates — when estimating the allowance.", true, "Reasonable and supportable forecasts."),
  ]],
]);

addLessons("t17", [
  ["Scenario: Year-End A/P Cut-Off Testing", "The auditor's favorite: unrecorded liabilities. Determine which January payments belong in December.", [
    mc("Jan 8 payment: $14,000 to a freight carrier for December deliveries; not accrued. Treatment?", ["January expense", "Unrecorded December liability — accrue", "Prepaid", "Ignore"], 1, "Service date in December."),
    mc("Jan 12 payment: $9,000 rent for January.", ["Accrue in December", "January expense — correctly excluded", "Prepaid in December", "Split"], 1, "Benefit period is January."),
    mc("Jan 15 payment: $30,000 for inventory shipped FOB destination on Dec 29, received Jan 3.", ["December purchase", "January purchase — title passed on arrival", "Split", "Prepaid"], 1, "FOB destination: buyer owns on receipt."),
    mc("Jan 15 payment: $30,000 for inventory shipped FOB shipping point Dec 29, received Jan 3.", ["January purchase", "December purchase and liability — in transit inventory belongs to the buyer", "Neither", "Depends on payment"], 1, "Also include it in December's ending inventory."),
    mc("Jan 20 payment: $6,500 legal fees for December work, invoice dated Jan 5.", ["January", "December accrual", "Prepaid", "Capitalize"], 1, "Invoice date is irrelevant."),
    fill("Unrecorded December liabilities found: 14,000 + 30,000 (FOB shipping point) + 6,500. Total adjustment to A/P/accrued liabilities?", 50500, "Sum."),
    mc("Effect of the $50,500 on December net income (assume the $30,000 inventory is also added to ending inventory)?", ["−50,500", "−20,500 (14,000 + 6,500 expenses; inventory is an asset)", "−30,000", "0"], 1, "Only the service costs hit income."),
    tf("Searching for unrecorded liabilities focuses on cash disbursements AFTER year end and unmatched receiving reports.", true, "Also review vendor statements."),
  ]],
  ["A/P Strategy & Vendor Management", "Payables are free financing — up to a point. Discounts, dynamic discounting, vendor scorecards, 1099 tracking, and use tax.", [
    mc("A vendor offers 1/10 net 60. Annualized cost of forgoing?", ["≈7.4%", "≈12%", "≈37%", "≈1%"], 0, "1/99 × 365/50 ≈ 7.4% — less compelling; compare to your cost of capital."),
    mc("Dynamic discounting is…", ["A fixed early-pay discount", "Buyer offers vendors sliding-scale discounts for earlier payment, often via a platform", "A late fee", "Factoring"], 1, "Uses excess cash for guaranteed returns."),
    mc("A vendor is an individual consultant paid $12,000 this year by check. Year-end requirement?", ["None", "Form 1099-NEC by Jan 31 (W-9 should be on file)", "W-2", "1099-K"], 1, "Payments by credit card/PayPal are reported by the processor on 1099-K instead."),
    mc("The company buys $20,000 of equipment online from an out-of-state vendor who didn't charge sales tax. Obligation?", ["None", "Accrue and remit use tax to its own state", "Federal excise", "Vendor's problem"], 1, "Use tax is the most common state audit finding."),
    mc("Accrued liabilities vs A/P: which is best for a $25,000 estimated legal bill for December services not yet invoiced?", ["A/P", "Accrued Liabilities", "Prepaid", "Notes Payable"], 1, "A/P is for received invoices."),
    mc("Debit balances totaling $8,000 in A/P (vendor credits/overpayments). Presentation?", ["Net in A/P", "Reclassify to a receivable/other current asset if material", "Write off", "Expense"], 1, "Don't net assets against liabilities."),
    mc("A vendor statement shows an invoice you have no record of. Steps?", ["Pay it", "Request the invoice and proof of delivery/PO; match before recording", "Ignore", "Dispute automatically"], 1, "Three-way match protects against phantom invoices."),
    tf("Stretching payables indefinitely is a costless source of financing.", false, "Lost discounts, damaged relationships, credit holds, and supply risk are real costs."),
  ]],
]);

addLessons("t18", [
  ["Scenario: Perpetual Inventory at an Electronics Store", "Track a single SKU through purchases, sales, returns, and a physical count under perpetual FIFO and moving average.", [
    fill("Jan 1: 20 units @ $200. Jan 8: buy 30 @ $210. Jan 12: sell 35. Perpetual FIFO COGS for the Jan 12 sale?", 7150, "20 × 200 + 15 × 210 = 4,000 + 3,150."),
    fill("Same facts, moving average. Average cost after Jan 8 purchase? (2 decimals)", 206, "(4,000 + 6,300) ÷ 50 = 206.00.", { tol: 0.01 }),
    fill("Moving average COGS for the Jan 12 sale of 35 units?", 7210, "35 × 206."),
    fill("Jan 20: buy 25 @ $220. Jan 25: sell 30. Perpetual FIFO COGS for Jan 25 (remaining after Jan 12: 15 @ 210)?", 6450, "15 × 210 + 15 × 220 = 3,150 + 3,300."),
    fill("Jan 31 perpetual FIFO records show 10 units @ $220 = $2,200. Physical count finds 9 units. Shrinkage entry amount?", 220, "1 unit × 220 → Dr Inventory Shrinkage (COGS) / Cr Inventory 220."),
    je("A customer returns 1 unit sold Jan 25 (sale price $350, FIFO cost $220), in resalable condition. Record the COST side.", ["Inventory", "Cost of Goods Sold", "Sales Returns", "Cash"], ["Inventory"], ["Cost of Goods Sold"], "Plus Dr Sales Returns / Cr Cash 350."),
    mc("Periodic FIFO would give the same ending inventory as perpetual FIFO. True for LIFO too?", ["Yes always", "No — LIFO perpetual and periodic can differ because layers are consumed at different times", "Only in rising prices", "Only with returns"], 1, "FIFO is timing-independent; LIFO is not."),
    tf("A perpetual system eliminates the need for a physical count.", false, "Counts are still required to detect shrinkage, errors, and theft."),
  ]],
  ["Inventory Costing Decisions & Manufacturing", "Choosing a method, LIFO reserve, dollar-value LIFO, manufacturing inventories (RM/WIP/FG), and standard cost variances flowing into inventory.", [
    mc("A company reports FIFO inventory of $2.0M and a LIFO reserve of $400,000. LIFO inventory?", ["$2.4M", "$1.6M", "$2.0M", "$0.4M"], 1, "LIFO reserve = FIFO − LIFO."),
    fill("LIFO reserve rose from $400,000 to $460,000 during the year. Effect on pretax income vs FIFO?", -60000, "LIFO income is $60,000 LOWER than FIFO would have been (cash tax savings ≈ 60,000 × rate)."),
    mc("Dollar-value LIFO uses…", ["Unit counts", "Price indices to measure inventory pools in base-year dollars, adding layers for real increases", "FIFO layers", "Retail prices"], 1, "Reduces LIFO liquidation from product mix changes."),
    fill("Dollar-value LIFO: base-year inventory $500,000 (index 1.00). Year-end inventory at current cost $660,000; index 1.10. Ending inventory at DV-LIFO?", 610000, "660,000 ÷ 1.10 = 600,000 base; layer 100,000 × 1.10 = 110,000; total 500,000 + 110,000."),
    match("Manufacturer's inventory flow", [["Steel purchased", "Raw Materials"], ["Partially assembled units", "Work in Process"], ["Completed units awaiting sale", "Finished Goods"], ["Units shipped to customers", "Cost of Goods Sold"]], "RM → WIP (+DL +MOH) → FG → COGS."),
    fill("Beginning WIP 80,000; DM used 300,000; DL 200,000; MOH applied 250,000; ending WIP 95,000. Cost of goods manufactured?", 735000, "80 + 750 − 95."),
    fill("Beginning FG 120,000; COGM 735,000; ending FG 140,000. COGS?", 715000, "120 + 735 − 140."),
    mc("Abnormal spoilage and idle capacity costs are…", ["Inventoried", "Expensed in the period (ASC 330) — not allocated to inventory", "Deferred", "Capitalized into equipment"], 1, "Only normal capacity costs attach to inventory."),
    tf("A company may switch inventory methods each year to optimize taxes.", false, "Consistency; changes require justification and IRS consent (Form 3115) for tax."),
  ]],
]);

addLessons("t19", [
  ["Scenario: Fixed Asset Register Clean-Up", "You inherit a register with capitalization errors, missing disposals, and wrong lives. Fix each item and compute the corrected depreciation.", [
    mc("A $900 office chair was capitalized and depreciated over 7 years. Company policy threshold is $2,500.", ["Fine", "Expense it (immaterial, below policy); remove from register", "Depreciate faster", "Add to building"], 1, "Capitalization policy should be applied consistently."),
    mc("A truck sold two years ago is still on the register with $0 book value and depreciation stopped. Fix?", ["Nothing — no P&L effect", "Remove cost and accumulated depreciation (Dr Acc Dep / Cr Truck); verify the original sale was recorded", "Write off as loss", "Keep for taxes"], 1, "Ghost assets distort the register and property tax filings."),
    fill("Building cost $1,200,000 was set up with a 20-year life; correct is 39 years for book policy (40 for simplicity). After 5 years at 60,000/yr, accumulated depreciation is 300,000. Prospective annual depreciation over the remaining 35 years?", 25714, "900,000 ÷ 35 = 25,714 (change in estimate — no restatement).", { tol: 1 }),
    mc("$85,000 of installation and testing costs for a new production line were expensed. Correct treatment?", ["Expense is fine", "Capitalize as part of the asset's cost (costs to bring it to working condition)", "Capitalize half", "Amortize as an intangible"], 1, "Cost includes all necessary expenditures to get the asset ready for use."),
    mc("A $40,000 roof replacement on a warehouse was expensed as repairs. Book treatment?", ["Correct", "Capitalize (major component replacement); remove the old roof's cost if separately identifiable", "Expense over 5 years", "Add to land"], 1, "Tax may differ (tangible property regs: routine maintenance safe harbor, BAR tests)."),
    mc("Land $200,000 and building $800,000 were purchased together for $900,000 (basket purchase). Allocate…", ["All to building", "Proportionally by relative fair value: land 180,000; building 720,000", "By book value", "50/50"], 1, "Relative fair value method."),
    fill("The register shows a machine: cost 150,000; life 10 yrs; salvage 10,000; SL; in service 7 years. It's now impaired: undiscounted cash flows 40,000, fair value 32,000. Impairment loss?", 20000, "Book value = 150,000 − 98,000 = 52,000; 40,000 < 52,000 → impaired; loss = 52,000 − 32,000."),
    tf("After an impairment write-down, the new carrying amount becomes the basis for future depreciation and cannot be written back up under U.S. GAAP.", true, "Held-and-used assets: no reversal."),
  ]],
  ["Intangibles, Natural Resources & Leases", "Amortization of intangibles, goodwill impairment, depletion, and the ROU asset under ASC 842.", [
    fill("Patent purchased for $240,000 with 12 years of legal life remaining but an expected useful life of 8 years. Annual amortization?", 30000, "Use the shorter useful life."),
    mc("Goodwill is…", ["Amortized over 15 years for book", "Not amortized (public cos); tested for impairment annually at the reporting-unit level (private co. alternative: amortize ≤ 10 years)", "Expensed", "Amortized over 40 years"], 1, "ASC 350."),
    fill("Reporting unit carrying amount $5M (incl. goodwill $1.2M); fair value $4.3M. Goodwill impairment (ASU 2017-04, single step)?", 700000, "Impairment = carrying − fair value, capped at goodwill: 700,000."),
    mc("Internally developed software for SALE: costs before technological feasibility are…", ["Capitalized", "Expensed as R&D (ASC 985-20)", "Deferred", "Inventory"], 1, "Internal-use software follows ASC 350-40 (capitalize application development stage)."),
    fill("Mine acquired for $3,000,000 with estimated 500,000 tons; restoration cost $200,000; residual land value $400,000. 80,000 tons extracted. Depletion?", 448000, "(3,000,000 + 200,000 − 400,000) ÷ 500,000 = $5.60/ton × 80,000."),
    mc("Depletion for tons extracted but NOT yet sold is…", ["Expensed", "Part of inventory until sold", "Deferred revenue", "Amortized"], 1, "Depletion follows the ore."),
    fill("Operating lease: 5 annual payments of $50,000 in arrears; rate 6% (PV factor 4.2124). Initial ROU asset and lease liability?", 210620, "50,000 × 4.2124.", { tol: 5 }),
    mc("Under ASC 842, an OPERATING lease produces…", ["Amortization + interest expense", "A single straight-line lease cost; the ROU asset amortization is a plug", "No expense", "Depreciation only"], 1, "Finance leases show amortization and interest separately (front-loaded)."),
    tf("Asset retirement obligations (ASC 410) are capitalized into the related asset's cost and accreted as a liability over time.", true, "e.g., decommissioning, landfill closure."),
  ]],
]);

addLessons("t21", [
  ["Scenario: Full Bond Amortization Schedule", "$1,000,000 4-year bonds, 5% annual coupon, issued at 96.535 to yield 6%. Complete the schedule, record each year's entry, and present the balance sheet.", [
    fill("Issue proceeds?", 965350, "1,000,000 × 96.535%."),
    fill("Year 1 interest expense (effective interest)?", 57921, "965,350 × 6%.", { tol: 1 }),
    fill("Year 1 discount amortization?", 7921, "57,921 − 50,000 cash.", { tol: 1 }),
    fill("Carrying value end of year 1?", 973271, "965,350 + 7,921.", { tol: 2 }),
    fill("Year 2 interest expense?", 58396, "973,271 × 6%.", { tol: 2 }),
    fill("Carrying value end of year 2?", 981667, "973,271 + 8,396.", { tol: 3 }),
    mc("Balance sheet at end of year 2 shows…", ["Bonds Payable 1,000,000", "Bonds Payable 1,000,000 less unamortized discount 18,333 = 981,667 (noncurrent, since maturity is > 12 months)", "Bonds payable 981,667 as current", "Discount as an asset"], 1, "Net presentation; reclassify to current in the final year."),
    fill("Total interest expense over the 4-year life?", 234650, "Cash interest 200,000 + total discount 34,650."),
    mc("If the bonds had been issued at a PREMIUM (say, 103.5), the carrying value would…", ["Rise each year", "Decline toward face; interest expense < cash paid", "Stay constant", "Equal face at all times"], 1, "Mirror image of the discount."),
  ]],
  ["Debt Features & Modifications", "Convertibles, warrants, covenants, troubled debt restructuring, and debt modification vs extinguishment (the 10% test).", [
    mc("Under ASU 2020-06, most convertible bonds are accounted for as…", ["Separate debt and equity components", "A single liability at amortized cost (no bifurcation of the conversion feature unless it's a derivative)", "Equity", "Fair value through NI"], 1, "Simplified model; if-converted EPS method required."),
    mc("Bonds issued with detachable warrants: proceeds are allocated…", ["All to bonds", "Between bonds and warrants (APIC) based on relative fair values", "All to warrants", "To retained earnings"], 1, "Detachable warrants are separate instruments."),
    mc("Debt is modified: PV of new cash flows differs from the old by 12%. Accounting?", ["Modification — adjust the effective rate prospectively", "Extinguishment — derecognize old debt, record new at fair value, gain/loss now; costs expensed", "Nothing", "Equity"], 1, "≥10% → extinguishment (ASC 470-50)."),
    mc("Same scenario but the difference is 6%. Fees paid to the lender are…", ["Expensed", "Capitalized and amortized as an adjustment to the effective interest rate over the remaining term", "Recorded as a loss", "Charged to equity"], 1, "Modification accounting; third-party costs expensed."),
    mc("A troubled debt restructuring (debtor's side): the creditor accepts land with FV $400,000 (book $300,000) to settle a $500,000 note. Debtor records…", ["No gain", "Gain on disposal of land 100,000 AND gain on restructuring 100,000", "Loss 200,000", "Gain 200,000 all as restructuring"], 1, "Two separate gains."),
    mc("A debt covenant requires quarterly reporting within 45 days. Missing the deadline is…", ["Irrelevant", "A technical default — could allow the lender to accelerate; obtain a waiver before issuing statements", "A financial covenant", "Fraud"], 1, "Affirmative covenants matter."),
    mc("Interest capitalization on a self-constructed building uses…", ["All interest", "Avoidable interest: weighted-average accumulated expenditures × the applicable rate, limited to actual interest", "None", "Prime rate"], 1, "ASC 835-20."),
    tf("A sinking fund required by a bond indenture is classified as a long-term investment (restricted), not cash.", true, "Presentation: noncurrent asset."),
  ]],
]);

addLessons("t22", [
  ["Scenario: Equity Section from Formation to Year 3", "A startup issues common and preferred stock, buys back shares, pays dividends and splits. Build the equity section at the end.", [
    fill("Year 1: issue 500,000 common shares ($0.01 par) at $2. APIC — common?", 995000, "1,000,000 − 5,000 par."),
    fill("Year 1: issue 100,000 shares of 8%, $10 par cumulative preferred at $12. Total preferred proceeds and APIC—preferred? Enter APIC.", 200000, "1,200,000 − 1,000,000 par."),
    fill("Year 1 net loss (250,000); no dividends. Year 2 NI 600,000; preferred dividends declared for BOTH years (arrears + current). Total preferred dividends paid in year 2?", 160000, "80,000 × 2."),
    fill("Year 2: repurchased 40,000 common shares at $5. Treasury stock balance?", 200000, "Cost method."),
    fill("Year 3: NI 900,000; preferred dividend 80,000; common dividend $0.20 × 460,000 outstanding shares = ?", 92000, "Only outstanding shares."),
    fill("Retained earnings at end of year 3?", 918000, "−250 + 600 − 160 + 900 − 80 − 92 = 918,000."),
    fill("Total stockholders' equity at end of year 3 (common 5,000; APIC-common 995,000; preferred 1,000,000; APIC-preferred 200,000; RE 918,000; treasury (200,000))?", 2918000, "Sum."),
    mc("Year 4: 2-for-1 split of common. Effect?", ["Equity doubles", "Shares outstanding 920,000; par $0.005; no dollar changes", "APIC doubles", "RE halves"], 1, "Memo entry."),
    mc("Book value per common share at end of year 3 (before split), using preferred liquidation value = par $1,000,000?", ["$6.34", "$3.73", "$4.17", "$5.00"], 2, "(2,918,000 − 1,000,000) ÷ 460,000 outstanding = $4.17. Check the charter: if liquidation preference includes the premium, subtract 1,200,000 instead."),
  ]],
  ["Stock Compensation & EPS", "ASC 718: fair value of options expensed over the vesting period. Diluted EPS: treasury stock method for options; if-converted for convertibles.", [
    fill("10,000 options granted; fair value $6 each; 4-year cliff vesting. Annual compensation expense?", 15000, "60,000 ÷ 4."),
    je("Record year-1 stock option expense of $15,000.", ["Compensation Expense", "Additional Paid-in Capital — Stock Options", "Cash", "Common Stock"], ["Compensation Expense"], ["Additional Paid-in Capital — Stock Options"], "Equity-classified awards credit APIC."),
    mc("20% of the options are forfeited in year 2 (employees leave). Under ASC 718 the company may…", ["Do nothing", "Elect to account for forfeitures as they occur (reverse prior expense for forfeited awards) or estimate forfeitures upfront", "Keep the expense", "Record a loss"], 1, "ASU 2016-09 policy election."),
    mc("Restricted stock units (RSUs) settled in shares are measured at…", ["Intrinsic value at vesting", "Grant-date fair value (stock price), expensed over vesting", "Exercise price", "Zero"], 1, "No exercise price → fair value ≈ stock price."),
    fill("Diluted EPS, treasury stock method: 100,000 options at $20 exercise; average market price $25. Incremental shares?", 20000, "100,000 − (2,000,000 ÷ 25 = 80,000) = 20,000."),
    fill("NI 1,000,000; weighted common shares 400,000; incremental option shares 20,000; convertible bonds: 50,000 shares if converted, after-tax interest saved $60,000. Diluted EPS? (2 decimals)", 2.26, "(1,000,000 + 60,000) ÷ (400,000 + 20,000 + 50,000) = 2.255 → 2.26 (basic = 2.50; both dilutive).", { tol: 0.01 }),
    mc("Convertible preferred would increase EPS if converted. Treatment?", ["Include", "Antidilutive — exclude from diluted EPS", "Include half", "Restate basic"], 1, "Only dilutive securities enter diluted EPS."),
    mc("A stock dividend or split occurring after year end but before issuance…", ["Ignored", "Retroactively adjusts all EPS figures presented", "Disclosed only", "Affects next year"], 1, "ASC 260-10-55-12."),
    tf("Cash-settled stock appreciation rights are liability-classified and remeasured at fair value each period.", true, "Expense fluctuates with the stock price."),
  ]],
]);

})(window.LL);
