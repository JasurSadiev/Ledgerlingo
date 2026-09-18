/* Expansion lessons — Accounting topics 23–33 + Tax Pro */
(function ({ mc, tf, dc, fill, je, match, order, addLessons }) {

addLessons("t23", [
  ["Scenario: A Food Bank's Year", "Grants, in-kind food donations, volunteers, a capital campaign, and an endowment. Record and classify.", [
    je("Received $250,000 cash from a foundation for general operations (no restrictions).", ["Cash", "Contribution Revenue — Without Donor Restrictions", "Contribution Revenue — With Donor Restrictions", "Deferred Revenue"], ["Cash"], ["Contribution Revenue — Without Donor Restrictions"], "Unrestricted, unconditional."),
    je("Received donated canned food with fair value $80,000 (to be distributed).", ["Inventory — Donated Food", "Contribution Revenue — In-Kind", "Cash", "Program Expense"], ["Inventory — Donated Food"], ["Contribution Revenue — In-Kind"], "Gifts in kind at fair value (ASU 2020-07 requires separate presentation/disclosure)."),
    je("Distributed $60,000 (fair value) of the donated food to clients.", ["Program Expense — Food Distribution", "Inventory — Donated Food", "Cash", "Contribution Revenue"], ["Program Expense — Food Distribution"], ["Inventory — Donated Food"], "Expense when distributed."),
    mc("400 volunteers sorted food (10,000 hours). Recognized?", ["Yes, at minimum wage", "No — not specialized skills and doesn't create/enhance a nonfinancial asset; disclose in notes", "Yes, at $30/hr", "As deferred revenue"], 1, "Contributed services criteria."),
    je("Received a $500,000 pledge for a new warehouse, payable over 2 years, unconditional.", ["Pledges Receivable", "Contribution Revenue — With Donor Restrictions", "Cash", "Deferred Revenue"], ["Pledges Receivable"], ["Contribution Revenue — With Donor Restrictions"], "Purpose-restricted; long-term pledge discounted to PV."),
    mc("A government cost-reimbursement grant of $300,000 for a nutrition program: revenue is recognized…", ["When awarded", "As qualifying expenses are incurred (conditional contribution — barrier is incurring costs)", "When cash arrives", "At year end"], 1, "ASU 2018-08: most government grants are conditional contributions."),
    je("A donor gives $1,000,000 to be held in perpetuity; income to support operations. Record the gift.", ["Cash", "Contribution Revenue — With Donor Restrictions (Perpetual)", "Contribution Revenue — Without Donor Restrictions", "Endowment Liability"], ["Cash"], ["Contribution Revenue — With Donor Restrictions (Perpetual)"], "Endowment principal."),
    mc("The endowment earned $40,000; the board appropriates $35,000 for spending under UPMIFA. Classification of the $35,000?", ["Stays restricted", "Released to without donor restrictions upon appropriation (if purpose met)", "Liability", "Reduces principal"], 1, "Appropriation + purpose satisfaction triggers release."),
    fill("Year-end: net assets without restrictions 700,000; with restrictions 1,600,000; total expenses 1,950,000; program 1,560,000. Program ratio?", 80, "1,560 ÷ 1,950.", { unit: "%", tol: 0.1 }),
  ]],
  ["Nonprofit Compliance & Governance", "Form 990 transparency, public support test, excess benefit transactions, donor acknowledgments, and single audits.", [
    mc("A donor gives $300 cash. For the donor to deduct it, the charity must provide…", ["Nothing", "A contemporaneous written acknowledgment for gifts ≥ $250 stating whether goods/services were provided", "A 1099", "A Form 8283"], 1, "IRC §170(f)(8)."),
    mc("A donor pays $200 for a gala ticket; the meal's fair value is $75. Deductible portion and required disclosure?", ["$200; none", "$125; quid pro quo disclosure required for payments > $75", "$75", "$0"], 1, "§6115."),
    mc("An organization expends $900,000 of federal awards in a year. Requirement?", ["Nothing", "Single Audit under Uniform Guidance (threshold $1,000,000 for FYs beginning on/after Oct 1, 2024) — so NOT required here", "Form 990-T", "State audit only"], 1, "Threshold rose from $750K to $1M."),
    mc("The executive director receives compensation far above comparable organizations, approved without documentation. Risk?", ["None", "Excess benefit transaction — intermediate sanctions (§4958) excise taxes on the insider and approving managers", "Loss of grants only", "UBIT"], 1, "Use the rebuttable presumption: independent approval, comparability data, contemporaneous documentation."),
    mc("A 501(c)(3) public charity must generally pass the public support test:", ["≥ 10% from government", "≥ 33⅓% of support from the general public/government over 5 years (or 10% + facts and circumstances)", "≥ 50% from one donor", "No test"], 1, "Otherwise it may be reclassified as a private foundation."),
    mc("The nonprofit runs a thrift store staffed by volunteers selling donated goods. UBIT?", ["Taxable", "Excluded — volunteer labor exception and donated merchandise exception", "Taxable at 21%", "Depends on profit"], 1, "§513(a) exceptions."),
    mc("Form 990 Schedule B lists…", ["Program details", "Contributors of $5,000+ (names generally not public for 501(c)(3)s)", "Salaries", "Investments"], 1, "Public inspection copies redact donor names."),
    tf("A nonprofit's Form 990 is a public document that must be provided upon request.", true, "Also posted on GuideStar/Candid and ProPublica."),
  ]],
]);

addLessons("t24", [
  ["Scenario: Pricing a New Product Line", "A coffee roaster launches subscriptions. Use CVP to set price, evaluate a marketing spend, and stress-test assumptions.", [
    fill("Variable cost per bag $7; fixed costs of the line $180,000/yr. At a $15 price, break-even bags?", 22500, "180,000 ÷ 8."),
    fill("Market research: at $18 price, demand 25,000 bags; at $15, 32,000 bags. Operating income at $18?", 95000, "(18 − 7) × 25,000 − 180,000."),
    fill("Operating income at $15?", 76000, "8 × 32,000 − 180,000."),
    mc("Which price is better on these numbers?", ["$15 — more volume", "$18 — higher profit ($95K vs $76K) with less operational strain", "Equal", "Neither"], 1, "Volume isn't the goal; contribution is."),
    fill("A $30,000 ad campaign is expected to add 4,000 bags at $18. Change in profit?", 14000, "4,000 × 11 − 30,000."),
    fill("Variable cost rises to $8 (bean prices). New break-even at $18?", 18000, "180,000 ÷ 10."),
    fill("Margin of safety at $18 with 25,000 bags and variable cost $8?", 28, "(25,000 − 18,000) ÷ 25,000 = 28%.", { unit: "%", tol: 0.5 }),
    mc("A subscription model converts some fixed costs (retail rent) to variable (shipping per bag). Effect on operating leverage and risk?", ["Higher leverage", "Lower operating leverage — lower break-even, less upside per unit but less downside risk", "No change", "Higher break-even"], 1, "Cost structure choices are risk choices."),
    tf("If the roaster sells 3 SKUs with different CMs, the break-even point depends on the sales mix.", true, "Mix shifts toward low-CM products raise break-even."),
  ]],
  ["CVP Advanced: Mix, Taxes, Step Costs", "Multi-product mix in dollars, after-tax targets, step fixed costs, and CVP with semi-variable costs.", [
    fill("Sales mix by revenue: Product A 60% (CM ratio 50%), Product B 40% (CM ratio 25%). Weighted CM ratio? (%)", 40, "0.6 × 50 + 0.4 × 25.", { unit: "%", tol: 0.1 }),
    fill("Fixed costs $1,200,000. Break-even sales dollars?", 3000000, "1,200,000 ÷ 0.40."),
    fill("Mix shifts to A 40%, B 60%. New weighted CM ratio? (%)", 35, "0.4 × 50 + 0.6 × 25.", { unit: "%", tol: 0.1 }),
    fill("New break-even sales dollars?", 3428571, "1,200,000 ÷ 0.35.", { tol: 5 }),
    fill("Target after-tax income $315,000; tax rate 30%; CM ratio 40%; fixed $1,200,000. Required sales?", 4125000, "Pretax 450,000; (1,200,000 + 450,000) ÷ 0.40."),
    mc("Fixed costs are $500,000 up to 50,000 units, then $650,000 (a second shift supervisor and lease). CM $12/unit. Break-even?", ["41,667 units", "41,667 units (within the first step) — the second step is irrelevant unless volume exceeds 50,000", "54,167", "Both"], 1, "Check each step's break-even against its relevant range."),
    fill("Semi-variable utility cost: $4,000/month + $0.50/unit. At 20,000 units, total monthly utility cost?", 14000, "4,000 + 10,000."),
    mc("Contribution margin income statement vs traditional: the difference is that the CM format…", ["Ignores fixed costs", "Separates costs by behavior (variable vs fixed) instead of function (COGS vs SG&A)", "Is GAAP", "Shows gross profit"], 1, "Essential for CVP; not GAAP."),
  ]],
]);

addLessons("t25", [
  ["Scenario: Turning Around a Struggling Restaurant", "Revenue $1.8M; net loss. Use contribution analysis, menu engineering, and cost control to find $120,000 of profit.", [
    fill("Food cost 36% of sales, target 30%. Annual savings if achieved on $1.8M?", 108000, "6% × 1,800,000."),
    mc("Menu engineering: a dish with high popularity but low CM is a…", ["Star", "Plowhorse — reprice, re-portion, or re-engineer ingredients", "Dog", "Puzzle"], 1, "Stars: high/high; Puzzles: high CM/low popularity; Dogs: low/low."),
    fill("Signature burger: price $14, food cost $6.30. Raising price to $15 loses 5% of the 20,000 annual units. Change in annual CM?", 11300, "Before: 7.70 × 20,000 = 154,000. After: 8.70 × 19,000 = 165,300. Increase $11,300."),
    mc("Labor is 38% of sales. Which lever reduces it WITHOUT hurting service most?", ["Cut all hours 10%", "Schedule to forecasted demand by daypart; cross-train; trim slow-shift overstaffing", "Cut wages", "Close Mondays without analysis"], 1, "Data-driven scheduling."),
    mc("Closing Monday lunch (sales $900, variable costs $400, avoidable labor $350, allocated rent $200) changes profit by…", ["+$200", "−$150 (lose $150 of contribution after avoidable costs; rent continues)", "+$50", "0"], 1, "900 − 400 − 350 = 150 contribution lost."),
    fill("Beverage program: adding a $9 cocktail with $1.80 cost expected to sell 6,000/yr. Incremental CM?", 43200, "7.20 × 6,000."),
    mc("The owner wants to add delivery via a platform charging 30% commission. Menu item $20, food cost $6, packaging $1. Delivery CM?", ["$13", "$7 (20 − 6 − 6 commission − 1)", "$14", "$0"], 1, "Delivery can be CM-positive but much thinner; consider delivery pricing."),
    fill("Summing initiatives: food cost savings 108,000 + burger reprice 11,300 + cocktail 43,200 (keep Monday lunch: 0). Total improvement?", 162500, "Exceeds the $120,000 target."),
  ]],
  ["Pricing, Outsourcing & Capacity", "Target costing, cost-plus vs value pricing, transfer pricing, and using idle capacity.", [
    fill("Target costing: market price $120; required margin 25% of price. Target cost?", 90, "120 × 75%."),
    mc("Current cost is $102 vs target $90. Value engineering means…", ["Raise the price", "Redesign the product/process to remove $12 of cost while preserving customer-valued features", "Accept lower margin", "Drop the product"], 1, "Design determines ~80% of cost."),
    mc("Cost-plus pricing's main weakness?", ["Too simple", "Ignores customer value and competition; allocated fixed costs per unit depend on volume assumptions (circular)", "Too high", "Illegal"], 1, "Price → volume → unit cost → price."),
    mc("Division A (capacity available) sells internally to Division B. Minimum transfer price?", ["Full cost", "Variable cost (plus any opportunity cost — zero if idle capacity)", "Market price", "Zero"], 1, "General rule: VC + opportunity cost."),
    mc("Division A is at full capacity selling externally at $50 (VC $30). Minimum transfer price to B?", ["$30", "$50 (VC + $20 lost CM)", "$40", "$20"], 1, "Opportunity cost = lost external margin."),
    fill("Outsourcing payroll: internal cost 60,000 salary + 8,000 software + 4,000 allocated overhead (unavoidable). Vendor quote 55,000. Annual savings from outsourcing?", 13000, "68,000 avoidable − 55,000."),
    mc("Beyond cost, outsourcing decisions should weigh…", ["Nothing", "Quality, control, data security, vendor dependence, and redeployment of freed resources", "Only tax", "Only speed"], 1, "Qualitative factors can dominate."),
    tf("A product with negative gross margin under absorption costing should always be discontinued.", false, "It may have positive contribution margin — absorption allocates fixed overhead that won't go away."),
  ]],
]);

addLessons("t26", [
  ["Scenario: Buy a Machine or Not?", "Full after-tax NPV with depreciation tax shield, working capital, salvage, and inflation. This is a real capital request.", [
    fill("Machine cost $400,000; 5-yr life; SL depreciation to zero for tax; tax rate 25%. Annual depreciation tax shield?", 20000, "80,000 × 25%."),
    fill("Pretax cash savings $130,000/yr. After-tax operating savings?", 97500, "130,000 × 75%."),
    fill("Annual after-tax cash flow (operating savings + tax shield)?", 117500, "97,500 + 20,000."),
    fill("Working capital investment of $30,000 at start, recovered at end of year 5. Salvage $50,000 at year 5 (book value 0 → taxable). After-tax salvage?", 37500, "50,000 × 75%."),
    fill("Discount rate 10%. PV factors: annuity 5 yrs 3.7908; single yr 5 0.6209. NPV?", 57381, "−430,000 + 117,500 × 3.7908 (445,419) + (37,500 + 30,000) × 0.6209 (41,911) = 57,330 ± rounding.", { tol: 150 }),
    mc("Decision?", ["Reject", "Accept — positive NPV at the required return", "Indifferent", "Need IRR first"], 1, "NPV > 0 creates value."),
    mc("If instead 100% bonus depreciation were used in year 1, NPV would…", ["Fall", "Rise — the tax shield ($100,000) arrives in year 1 instead of over 5 years", "Stay the same", "Become negative"], 1, "Timing of tax savings matters."),
    mc("Inflation of 3% is expected. Consistent treatment is…", ["Nominal cash flows with real rate", "Nominal cash flows with nominal rate, or real cash flows with real rate — never mixed", "Ignore inflation", "Real flows with nominal rate"], 1, "Fisher equation: (1 + nominal) = (1 + real)(1 + inflation)."),
    tf("Sunk feasibility-study costs of $15,000 already paid should be included in the NPV analysis.", false, "Sunk."),
  ]],
  ["Capital Rationing, Risk & Post-Audits", "Ranking projects under a budget constraint, sensitivity analysis, real options, and post-implementation audits.", [
    mc("Budget $1M. Projects: A (cost 600K, NPV 150K), B (cost 400K, NPV 120K), C (cost 500K, NPV 130K), D (cost 300K, NPV 60K). Best combination?", ["A + B", "A + B (NPV 270K) — vs B + C (250K), A + D (210K), C + D (190K)", "C + D", "A only"], 1, "Maximize total NPV within the budget (PI helps but check combinations)."),
    fill("Profitability index of project B?", 1.3, "(400 + 120) ÷ 400.", { unit: "x", tol: 0.01 }),
    mc("Sensitivity analysis shows NPV turns negative if sales volume falls 12%. Management should…", ["Reject", "Assess the probability of a 12% shortfall and consider mitigations (flexible capacity, phased investment)", "Ignore", "Accept blindly"], 1, "Identify the critical variables."),
    mc("A project's NPV is slightly negative, but it provides the option to expand into a new market if successful. This 'real option' value…", ["Is irrelevant", "May justify the project — NPV understates value when management flexibility exists", "Is always zero", "Reduces NPV"], 1, "Options to expand, abandon, delay."),
    mc("Using the company-wide WACC for a project much riskier than average will…", ["Correctly value it", "Overstate NPV and bias toward risky projects", "Understate NPV", "Have no effect"], 1, "Use risk-adjusted rates."),
    fill("WACC: 60% equity at 12%; 40% debt at 6% pretax; tax 25%. WACC? (1 decimal)", 9, "0.6 × 12 + 0.4 × 6 × 0.75 = 7.2 + 1.8.", { unit: "%", tol: 0.1 }),
    mc("A post-audit compares actual project results to the original forecast. Main purpose?", ["Punish managers", "Improve future forecasts, catch optimism bias, and decide whether to abandon underperformers", "Tax reporting", "None"], 1, "Feedback loop."),
    mc("Equivalent annual annuity is useful when…", ["Projects have equal lives", "Comparing mutually exclusive projects with different lives", "Projects are independent", "Computing payback"], 1, "EAA = NPV ÷ annuity factor."),
  ]],
]);

addLessons("t27", [
  ["PV Applications in Accounting", "Where PV of a single sum shows up in GAAP: notes, ARO, impairment, pensions, and purchase price allocations.", [
    fill("Company issues a $100,000 non-interest-bearing 3-year note for a machine; market rate 8% (factor 0.7938). Machine recorded at?", 79380, "PV of the note."),
    fill("Year-1 interest expense on that note?", 6350, "79,380 × 8%.", { tol: 1 }),
    je("Record year-1 interest on the note (discount amortization, no cash).", ["Interest Expense", "Discount on Notes Payable", "Cash", "Notes Payable"], ["Interest Expense"], ["Discount on Notes Payable"], "Carrying value rises toward face."),
    fill("Asset retirement obligation: $500,000 cost in 10 years; credit-adjusted risk-free rate 5% (factor 0.6139). Initial ARO liability?", 306950, "500,000 × 0.6139."),
    fill("Year-1 accretion expense on the ARO?", 15348, "306,950 × 5%.", { tol: 2 }),
    mc("A customer prepays $50,000 for delivery in 2 years (significant financing component, 6%). Revenue recognized at delivery?", ["$50,000", "$56,180 — contract liability accretes interest expense; revenue is the grossed-up amount", "$44,500", "$47,170"], 1, "Financing component increases revenue and adds interest expense."),
    mc("Impairment measurement of a held-for-use asset with no market price uses…", ["Undiscounted cash flows", "Fair value — often estimated as PV of expected cash flows (Level 3)", "Book value", "Replacement cost"], 1, "Step 1 undiscounted; Step 2 discounted."),
    fill("You need $1,000,000 in 15 years; your fund earns 7% (factor 0.3624). Deposit today?", 362400, "1,000,000 × 0.3624."),
  ]],
]);

addLessons("t28", [
  ["Loans, Leases & Pensions", "Annuity math behind amortizing loans, lease liabilities, and pension obligations — with the journal entries.", [
    fill("$300,000 mortgage, 6%, 30 years, monthly payments (monthly factor 166.7916). Monthly payment?", 1798.65, "300,000 ÷ 166.7916.", { tol: 0.1 }),
    fill("Interest in the FIRST monthly payment?", 1500, "300,000 × 0.5%."),
    fill("Principal in the first payment?", 298.65, "1,798.65 − 1,500.", { tol: 0.1 }),
    mc("After 10 years the balance is about $251,000. Why so little principal reduction?", ["Error", "Amortizing loans front-load interest; principal accelerates later", "Rate rose", "Fees"], 1, "Amortization schedule shape."),
    fill("Finance lease: 4 annual payments of $25,000 at the BEGINNING of each year; rate 8% (ordinary annuity factor 3.3121). Initial liability?", 89427, "25,000 × 3.3121 × 1.08 = 89,427 (annuity due).", { tol: 5 }),
    je("Record the finance lease commencement (payment made same day: $25,000).", ["Right-of-Use Asset", "Lease Liability", "Cash", "Lease Expense"], ["Right-of-Use Asset"], ["Lease Liability", "Cash"], "Dr ROU 89,427; Cr Liability 64,427; Cr Cash 25,000."),
    fill("Pension: retiree to receive $40,000/yr for 20 years; discount rate 5% (factor 12.4622). PV of the obligation?", 498488, "40,000 × 12.4622.", { tol: 5 }),
    mc("A structured settlement pays $10,000/yr for 10 years; a buyer offers $60,000 lump sum now. Implied rate ≈ ?", ["3%", "10.6% (factor 6.0 for 10 periods)", "5%", "20%"], 1, "Compare to your alternative returns — 10.6% is a steep discount."),
    fill("Deferred annuity: 5 payments of $10,000 starting at the END of year 4 (first payment year 4). Rate 6%. PVOA 5 periods 4.2124; discount 3 periods 0.8396. PV today?", 35367, "10,000 × 4.2124 × 0.8396.", { tol: 5 }),
  ]],
]);

addLessons("t29", [
  ["Savings, Sinking Funds & Growth", "FV of single sums and annuities for planning: bond sinking funds, equipment replacement reserves, and retirement projections.", [
    fill("FV of an ordinary annuity: $12,000 deposited at year end for 8 years at 5% (factor 9.5491). Balance?", 114589, "12,000 × 9.5491.", { tol: 5 }),
    fill("Same deposits at the BEGINNING of each year (annuity due)?", 120319, "114,589 × 1.05.", { tol: 10 }),
    fill("Company must have $2,000,000 in 10 years to retire bonds. Fund earns 4% (FVOA factor 12.0061). Required annual deposit?", 166582, "2,000,000 ÷ 12.0061.", { tol: 10 }),
    fill("A machine will cost $150,000 to replace in 6 years; prices rise 3%/yr. Expected cost then? (factor 1.1941)", 179115, "150,000 × 1.1941.", { tol: 10 }),
    fill("Employee, age 30, invests $6,000/yr until 65 at 7% (FVOA 35 yrs = 138.2369). Balance at 65?", 829421, "6,000 × 138.2369.", { tol: 20 }),
    mc("Starting the same plan at 40 (25 years, factor 63.2490) yields about…", ["$379,000 — less than half despite investing only 10 fewer years", "$600,000", "$700,000", "$829,000"], 0, "Compounding rewards time."),
    fill("Revenue $2M growing 12%/yr. Revenue in 5 years? (factor 1.7623)", 3524600, "2,000,000 × 1.7623.", { tol: 100 }),
    mc("A company earns 15% return on reinvested profits vs. 4% in T-bills. FV logic suggests…", ["Distribute all profits", "Reinvesting compounds value faster — as long as returns stay above the cost of capital", "Hold cash", "Borrow"], 1, "Reinvestment rate is the growth engine."),
  ]],
]);

addLessons("t30", [
  ["Scenario: Job Costing at a Custom Cabinet Shop", "Two jobs, one month. Record the flow from materials to finished goods to COGS, apply overhead, and dispose of the variance.", [
    je("Purchased $30,000 of lumber and hardware on account.", ["Raw Materials Inventory", "Accounts Payable", "Work in Process", "Manufacturing Overhead"], ["Raw Materials Inventory"], ["Accounts Payable"], "Raw materials asset."),
    je("Requisitioned direct materials: Job 201 $9,000; Job 202 $6,500; indirect materials (glue, sandpaper) $1,200.", ["Work in Process", "Manufacturing Overhead", "Raw Materials Inventory", "Cost of Goods Sold"], ["Work in Process", "Manufacturing Overhead"], ["Raw Materials Inventory"], "Dr WIP 15,500; Dr MOH 1,200; Cr RM 16,700."),
    je("Labor: Job 201 120 hrs, Job 202 90 hrs @ $30 direct; shop foreman $4,000 (indirect). (Credit Wages Payable.)", ["Work in Process", "Manufacturing Overhead", "Wages Payable", "Wages Expense"], ["Work in Process", "Manufacturing Overhead"], ["Wages Payable"], "Dr WIP 6,300; Dr MOH 4,000; Cr Wages Payable 10,300."),
    fill("Predetermined OH rate $22 per direct labor hour. Overhead applied to Job 201?", 2640, "120 × 22."),
    fill("Total cost of Job 201 (DM 9,000 + DL 3,600 + OH 2,640)?", 15240, "Sum."),
    je("Job 201 completed and transferred to finished goods ($15,240).", ["Finished Goods Inventory", "Work in Process", "Cost of Goods Sold", "Sales"], ["Finished Goods Inventory"], ["Work in Process"], "WIP → FG."),
    je("Job 201 delivered to the customer for $24,000 on account. Record BOTH the revenue and cost entries' accounts.", ["Accounts Receivable", "Sales", "Cost of Goods Sold", "Finished Goods Inventory", "Work in Process", "Cash"], ["Accounts Receivable", "Cost of Goods Sold"], ["Sales", "Finished Goods Inventory"], "Dr A/R 24,000 / Cr Sales 24,000; Dr COGS 15,240 / Cr FG 15,240."),
    fill("Actual overhead for the month: indirect materials 1,200 + indirect labor 4,000 + depreciation 1,500 + utilities 900 = 7,600. Applied = 210 hrs × 22 = 4,620. Under-applied?", 2980, "7,600 − 4,620 → Dr COGS / Cr MOH 2,980 if immaterial."),
    mc("The shop's overhead rate was based on 3,000 annual DLH but the shop is only running 2,000. Consequence?", ["Over-applied OH", "Chronic under-application — the rate is too low; revisit the denominator (practical capacity vs. expected volume)", "No effect", "Higher profits"], 1, "Denominator choice matters."),
  ]],
  ["Process Costing & Overhead Allocation Methods", "Equivalent units (weighted average), cost per EU, transferred-in costs, and departmental vs plantwide rates.", [
    fill("Weighted-average: units completed 40,000; ending WIP 10,000 (100% materials, 40% conversion). Equivalent units — conversion?", 44000, "40,000 + 4,000."),
    fill("Equivalent units — materials?", 50000, "40,000 + 10,000."),
    fill("Costs (beginning WIP + current): materials $250,000; conversion $198,000. Cost per EU — conversion? (2 decimals)", 4.5, "198,000 ÷ 44,000.", { tol: 0.01 }),
    fill("Cost per EU — materials?", 5, "250,000 ÷ 50,000."),
    fill("Cost of units completed and transferred out?", 380000, "40,000 × (5 + 4.50)."),
    fill("Cost of ending WIP?", 68000, "10,000 × 5 + 4,000 × 4.50."),
    mc("FIFO process costing differs from weighted average by…", ["Ignoring beginning WIP", "Separating beginning WIP's prior-period costs and counting only current-period work in equivalent units", "Using standard costs", "Ignoring conversion"], 1, "More precise; more work."),
    mc("A plant has a machine-intensive department and a labor-intensive department. A single plantwide rate based on DLH will…", ["Be accurate", "Under-cost products that use the machine department heavily and over-cost labor-heavy products", "Over-cost machine products", "Have no distortion"], 1, "Use departmental rates or ABC."),
    tf("Service department costs (maintenance, IT) should be allocated to production departments before computing overhead rates.", true, "Direct, step-down, or reciprocal methods."),
  ]],
]);

addLessons("t31", [
  ["Customer & Channel Profitability", "Allocate SG&A by cost-to-serve to find which customers actually make money — and what to do about the ones that don't.", [
    fill("Customer profitability: sales $800,000; COGS $520,000; cost-to-serve: 400 orders × $60; 120 rush deliveries × $200; 30 returns × $150; sales visits 24 × $500. Customer margin?", 215500, "280,000 − 24,000 − 24,000 − 4,500 − 12,000 = 215,500."),
    mc("A customer generates high gross margin but negative customer margin. Strategy options?", ["Fire the customer immediately", "Reprice services (rush fees, minimum orders), change behavior, or accept if strategic — but stop the losses", "Ignore", "Increase sales visits"], 1, "Cost-to-serve is manageable."),
    mc("Whale curve analysis typically shows…", ["All customers equally profitable", "The top 20% of customers generate 150–300% of profit; the bottom 20% destroy value", "Profit rises linearly", "Nothing useful"], 1, "Pareto in customer profitability."),
    fill("E-commerce channel: revenue $2M; COGS $1.1M; platform fees 12%; shipping $180,000; returns processing $60,000; channel marketing $150,000. Channel margin?", 270000, "2,000 − 1,100 − 240 − 180 − 60 − 150."),
    fill("Wholesale channel: revenue $3M; COGS $2.1M; sales commissions 5%; freight $90,000; trade allowances $120,000. Channel margin?", 540000, "3,000 − 2,100 − 150 − 90 − 120."),
    mc("The e-commerce channel margin is 13.5% vs wholesale 18%. Before shifting resources to wholesale, consider…", ["Nothing", "Growth rates, capacity, customer lifetime value, data ownership, and whether costs allocated are truly avoidable", "Only margin %", "Tax"], 1, "Margin % is one input."),
    mc("Corporate HQ costs of $900,000 are allocated to channels by revenue. For channel drop decisions these costs are…", ["Relevant", "Irrelevant unless avoidable — allocate for reporting but exclude from the decision", "Half relevant", "Avoidable"], 1, "Common fixed costs."),
    tf("A customer with a 10-year relationship and referrals may justify a negative current-period margin.", true, "Lifetime value and strategic considerations."),
  ]],
]);

addLessons("t32", [
  ["Scenario: ABC at a Medical Device Maker", "Two products: high-volume standard catheter and low-volume specialty catheter. Traditional costing says specialty is profitable. ABC says otherwise.", [
    fill("Overhead pools: setups $360,000 (600 setups); engineering changes $240,000 (120 ECNs); machining $900,000 (60,000 MH); packaging $200,000 (400,000 units). Setup rate?", 600, "360,000 ÷ 600."),
    fill("Specialty: 40,000 units; 400 setups; 90 ECNs; 12,000 MH. ABC overhead?", 620000, "400×600 + 90×2,000 + 12,000×15 + 40,000×0.50 = 240,000 + 180,000 + 180,000 + 20,000."),
    fill("Specialty ABC overhead per unit?", 15.5, "620,000 ÷ 40,000.", { tol: 0.01 }),
    fill("Traditional: total OH $1,700,000 ÷ 60,000 MH = $28.33/MH. Specialty traditional overhead per unit (12,000 MH)?", 8.5, "12,000 × 28.33 = 340,000 ÷ 40,000.", { tol: 0.02 }),
    mc("Specialty sells for $40; DM+DL $22. Margin under traditional vs ABC?", ["$9.50 vs $2.50 — still profitable", "Traditional: 40 − 22 − 8.50 = $9.50 profit; ABC: 40 − 22 − 15.50 = $2.50 — barely profitable, and the standard product was subsidizing it", "Loss both ways", "Same"], 1, "ABC reveals the cross-subsidy."),
    mc("Management's best response?", ["Drop specialty", "Reprice specialty, reduce setups/ECNs through design and batch sizing, or accept lower margin for strategic reasons", "Raise standard price", "Ignore ABC"], 1, "ABC informs; management decides."),
    mc("Time-driven ABC (TDABC) simplifies by…", ["Ignoring time", "Estimating capacity cost rate ($/minute) and time per activity, revealing unused capacity", "Using one pool", "Removing drivers"], 1, "Kaplan & Anderson."),
    fill("TDABC: department cost $600,000; practical capacity 20,000 hours. Capacity cost rate per hour?", 30, "600,000 ÷ 20,000."),
    fill("Activities consumed 17,000 hours. Cost of unused capacity?", 90000, "3,000 × 30 — a management signal, not assigned to products."),
  ]],
]);

addLessons("t33", [
  ["Scenario: Monthly Variance Report to Management", "You're the cost accountant presenting April's variances. Compute, explain, and recommend — the way a plant controller does.", [
    fill("Standard: 4 lbs @ $2.50 per unit. Produced 12,000 units; used 49,500 lbs; purchased 52,000 lbs @ $2.40. Material price variance (on purchases; F negative)?", -5200, "(2.40 − 2.50) × 52,000."),
    fill("Material quantity variance (U positive)?", 3750, "(49,500 − 48,000) × 2.50."),
    mc("Purchasing explains: a new supplier offered $2.40 with slightly lower grade. Production reports more scrap. Net effect?", ["+$1,450 F net — great", "Net F $1,450 this month, but quality risk, customer returns, and rework may not show yet — recommend a controlled test before full switch", "Return to old supplier", "Fire purchasing"], 1, "Interpret variances holistically."),
    fill("Labor: standard 0.5 hr @ $24. Actual 6,300 hrs @ $25. Rate variance (U positive)?", 6300, "(25 − 24) × 6,300."),
    fill("Labor efficiency variance (U positive)?", 7200, "(6,300 − 6,000) × 24."),
    mc("HR explains: overtime premiums due to a rush order. Efficiency loss from training two new hires. Recommendation?", ["Cut wages", "Flag rush-order pricing (recover overtime), track new-hire learning curve separately; expect efficiency to normalize", "Fire new hires", "Ignore"], 1, "Separate controllable from uncontrollable."),
    fill("Variable OH: $8/DLH standard. Actual VOH $52,000; 6,300 actual hrs; 6,000 standard hrs. Spending variance (U positive)?", 1600, "52,000 − 50,400."),
    fill("VOH efficiency variance (U positive)?", 2400, "300 × 8."),
    fill("Fixed OH budget $90,000; denominator 6,500 hrs ($13.846/hr); actual FOH $88,000; standard hrs 6,000. Volume variance (U positive)?", 6923, "90,000 − 6,000 × 13.846 = 6,923 U — under-utilized capacity.", { tol: 10 }),
    mc("Total variances: MPV 5,200 F; MQV 3,750 U; LRV 6,300 U; LEV 7,200 U; VOH 4,000 U; FOH budget 2,000 F; FOH volume 6,923 U. Net?", ["≈$20,973 U", "≈$21,000 unfavorable — explained mostly by labor and volume; recommend focus on scheduling and staffing", "$5,000 F", "$0"], 1, "−5,200 + 3,750 + 6,300 + 7,200 + 4,000 − 2,000 + 6,923 = 20,973 U."),
  ]],
  ["Setting Standards, Flexible Budgets & Sales Variances", "Where standards come from, flexible budgeting, and extending variance analysis to revenue: sales price, volume, mix, and quantity.", [
    mc("The best source for a direct materials quantity standard is…", ["Last year's average usage", "Engineering specifications (bill of materials) adjusted for normal, unavoidable waste", "Supplier estimates", "A guess"], 1, "Practical standard."),
    fill("Static budget: 10,000 units; variable cost $30/unit; fixed $200,000. Actual: 11,000 units; total cost $545,000. Flexible budget cost at 11,000 units?", 530000, "11,000 × 30 + 200,000."),
    fill("Flexible budget variance (U positive)?", 15000, "545,000 − 530,000."),
    mc("Static budget variance was 545,000 − 500,000 = 45,000 U. Why is the flexible variance the right measure of cost control?", ["It's smaller", "It removes the effect of volume — the extra 1,000 units legitimately cost $30,000 more", "It's GAAP", "It includes revenue"], 1, "Compare like with like."),
    fill("Sales price variance: budgeted price $50; actual $48; actual units 11,000. (U positive)", 22000, "(48 − 50) × 11,000 = 22,000 U."),
    fill("Sales volume variance (in CM): budgeted CM/unit $20; actual 11,000 vs budget 10,000. (F negative)", -20000, "1,000 × 20 F."),
    fill("Two products: budget mix 60% A (CM $20) / 40% B (CM $10); actual 11,000 units sold at a 50/50 mix. Sales MIX variance (U positive)?", 11000, "Actual units at actual mix: 5,500×20 + 5,500×10 = 165,000. Actual units at budget mix: 6,600×20 + 4,400×10 = 176,000. Shift toward low-CM B → $11,000 U."),
    mc("Standard costing is criticized in lean/JIT environments because…", ["Too accurate", "It can encourage overproduction (favorable volume variances) and large batches; lean prefers throughput and kaizen costing", "It's illegal", "Too cheap"], 1, "Match the system to the strategy."),
    tf("Standards should be updated when a permanent change in process, price, or product design occurs — not to eliminate every variance.", true, "Stable standards preserve the meaning of variances."),
  ]],
]);

/* ---------- Tax Pro expansion ---------- */
addLessons("x01", [
  ["Scenario: Full Provision for a Mid-Size Corporation", "Compute current and deferred tax, the effective rate reconciliation, and the journal entry — including state taxes and a stock comp windfall.", [
    fill("Pretax book income $8,000,000. Permanent: meals 50% disallowed +$120,000; municipal interest −$200,000; §162(m) excess comp +$500,000. Temporary: tax depreciation exceeds book −$900,000; accrued bonus not paid within 2½ months +$400,000; bad debt allowance increase +$150,000; stock comp: book expense $600,000 added back, tax deduction on exercise $1,000,000 (net −$400,000). Federal taxable income?", 7670000, "8,000,000 + 120,000 − 200,000 + 500,000 − 900,000 + 400,000 + 150,000 + 600,000 − 1,000,000 = 7,670,000. (The $300,000 R&D credit reduces tax, not income.)"),
    fill("Using taxable income $7,670,000, federal current tax before credits at 21%?", 1610700, "7,670,000 × 21%."),
    fill("Less R&D credit $300,000. Federal current tax?", 1310700, "1,610,700 − 300,000."),
    fill("State: apportioned taxable income $6,000,000 at 6% = $360,000 (deductible federally — assume already reflected). Total current tax expense?", 1670700, "1,310,700 + 360,000."),
    fill("Deferred (federal only, 21%): DTL from depreciation +189,000; DTAs: bonus +84,000; bad debts +31,500. Net deferred expense?", 73500, "189,000 − 84,000 − 31,500."),
    mc("The stock comp excess tax benefit ($400,000 × 21% = $84,000) is recorded…", ["In APIC", "As a discrete reduction of income tax expense in the period of exercise (ASU 2016-09)", "In OCI", "Not recorded"], 1, "Windfalls/shortfalls run through the P&L now."),
    fill("Total income tax expense (current 1,670,700 + deferred 73,500)?", 1744200, "1,744,200. The $84,000 stock-comp windfall is already embedded in the lower current tax."),
    fill("Effective tax rate? (2 decimals)", 21.8, "1,744,200 ÷ 8,000,000 = 21.80%.", { unit: "%", tol: 0.05 }),
    mc("In the ETR reconciliation from 21%, which item REDUCES the rate the most?", ["§162(m) excess comp", "R&D credit (−3.75% = 300,000 ÷ 8,000,000)", "Meals", "State tax"], 1, "State tax adds ≈ +4.5% pre-federal-benefit; §162(m) +1.3%; muni −0.5%; credit −3.75%; windfall −1.05%."),
    tf("ASU 2023-09 requires public companies to disclose the rate reconciliation in specific categories (state, foreign, credits, etc.) and income taxes paid by jurisdiction for years beginning after Dec 15, 2024.", true, "Enhanced income tax disclosures."),
  ]],
  ["Interim Provisions & Special Situations", "Estimated annual effective tax rate for quarters, discrete items, intraperiod allocation, outside basis differences, and indefinite reinvestment.", [
    mc("Q1 pretax income $2M; estimated annual pretax $10M; estimated annual tax $2.3M. Q1 tax expense?", ["$420,000", "$460,000 (AETR 23% × 2M)", "$575,000", "$500,000"], 1, "ASC 740-270 uses the estimated annual effective rate."),
    mc("Q2 includes a $1M settlement of a prior-year tax audit (favorable). Treatment?", ["Spread over the year", "Discrete item — recognized entirely in Q2", "Ignore", "In AETR"], 1, "Unusual/infrequent or prior-period items are discrete."),
    mc("A loss company can't reliably estimate its annual rate. Approach?", ["Use 21%", "Use actual year-to-date effective rate as the best estimate", "Record zero", "Use prior year"], 1, "Practical exception."),
    mc("Tax effects of items in OCI (e.g., unrealized AFS gains) are…", ["In income tax expense", "Allocated to OCI (intraperiod allocation)", "Ignored", "In APIC"], 1, "Follow the item."),
    mc("A U.S. parent asserts indefinite reinvestment of a foreign subsidiary's earnings. Consequence?", ["Record full DTL", "No DTL on the outside basis difference (ASC 740-30 exception), but disclose the unrecognized amount; still consider withholding taxes and GILTI/NCTI", "Record DTA", "Nothing to disclose"], 1, "Post-TCJA the DTL is often just withholding/state tax."),
    mc("Company acquires a target with $5M of DTAs fully reserved. In purchase accounting the acquirer expects to realize them. The valuation allowance release is…", ["Income", "Part of acquisition accounting (reduces goodwill) if determined in the measurement period based on acquirer facts", "OCI", "APIC"], 1, "Post-measurement-period changes hit income tax expense."),
    mc("A change in tax status from S corp to C corp results in…", ["Nothing", "Recognition of deferred taxes for all temporary differences on the conversion date, through income tax expense", "Restatement", "Equity adjustment"], 1, "Common in IPO prep."),
    tf("Under ASC 740, a DTA for a §382-limited NOL should be measured based on the amount expected to be usable, with a valuation allowance for the excess.", true, "Realizability considers the annual limitation."),
  ]],
]);

addLessons("x02", [
  ["Scenario: Cost Segregation & Depreciation Planning", "A client buys a $6M commercial building. Model straight 39-year vs a cost segregation study and the interplay with bonus, §179, and recapture on exit.", [
    fill("Purchase $6,000,000; land 20%. Building basis?", 4800000, "80%."),
    fill("Straight 39-year, mid-month, placed in service in March (11.5 months). Year-1 depreciation? (rate 2.461%)", 118128, "4,800,000 × 2.461%.", { tol: 50 }),
    fill("Cost seg reallocates: 5-year property $600,000; 15-year land improvements $400,000; remaining 39-year $3,800,000. With 100% bonus on 5- and 15-year property, year-1 depreciation (39-year at 2.461%)?", 1093518, "600,000 + 400,000 + 3,800,000 × 2.461% (93,518).", { tol: 100 }),
    fill("Additional year-1 deduction from cost seg vs straight 39-year?", 975390, "1,093,518 − 118,128.", { tol: 150 }),
    fill("Tax savings in year 1 at a 37% marginal rate (individual owner via pass-through)?", 360894, "975,390 × 37%.", { tol: 60 }),
    mc("The building is sold in year 6 for a gain. Which recapture applies to the $600,000 of 5-year property?", ["Unrecaptured §1250 at 25%", "§1245 ordinary income recapture up to depreciation taken (37%)", "No recapture", "§291"], 1, "Cost seg accelerates deductions but converts some future gain to ordinary — usually still favorable due to time value, but model it."),
    mc("The client is a passive investor with $50,000 of other passive income. The $1.09M year-1 loss is…", ["Fully deductible", "Limited by passive activity rules — offsets $50,000 of passive income; rest suspended (unless RE professional or STR loophole applies)", "Deductible against wages", "Lost"], 1, "Bonus depreciation only helps if you can use the loss."),
    mc("Short-term rental (average stay ≤ 7 days) with material participation is…", ["Always passive", "Not a 'rental activity' under Reg. §1.469-1T(e)(3) — losses can be nonpassive if material participation is met", "Never deductible", "A hobby"], 1, "The 'STR loophole'."),
    tf("A cost segregation study can be applied to a building acquired years ago via a Form 3115 automatic method change with a catch-up §481(a) deduction in the current year.", true, "'Look-back' cost seg."),
  ]],
  ["Depreciation Puzzles & Traps", "Listed property, mixed-use assets, related-party acquisitions, §280F recapture, and the excess business loss limit.", [
    mc("A vehicle used 55% for business in year 1 (bonus taken) drops to 45% business use in year 3. Consequence?", ["Nothing", "§280F recapture — excess of accelerated depreciation over ADS straight-line is recaptured as ordinary income; ADS going forward", "Full recapture of all depreciation", "Vehicle becomes personal"], 1, "Listed property falling to ≤ 50% business use."),
    mc("Property acquired from a related party (e.g., a corporation buying equipment from its 80% shareholder) is…", ["Eligible for bonus", "NOT eligible for bonus depreciation (§168(k)(2)(E)(ii)) — used property must be acquired from an unrelated party", "Eligible for §179 only if new", "Not depreciable"], 1, "Also 'used property' must not have been used by the taxpayer before."),
    mc("A partnership makes a §754 election; the §743(b) step-up allocated to equipment is…", ["Not depreciable", "Depreciated as newly placed-in-service property (and can qualify for bonus if the purchasing partner is unrelated)", "Amortized over 15 years", "Expensed"], 1, "Rev. Rul. and 2019 final regs confirm bonus eligibility for §743(b) adjustments."),
    fill("Excess business loss limit (2026, indexed ≈ $321,000 single / $642,000 MFJ under OBBBA). MFJ taxpayer has $1,200,000 of business losses and $200,000 of wages. Business loss allowed this year?", 642000, "Excess $558,000 becomes an NOL carryforward (§461(l), made permanent by OBBBA)."),
    mc("Qualified leasehold improvements financed with a tenant improvement allowance from the landlord (landlord owns them). The tenant…", ["Depreciates the improvements", "Excludes the allowance under §110 (if qualifying retail lease ≤ 15 years) and does not depreciate landlord-owned improvements", "Records income", "Capitalizes into rent"], 1, "Landlord depreciates as QIP."),
    mc("A farmer buys a $300,000 grain bin. Recovery?", ["39-year", "7-year MACRS (or 10-year for certain single-purpose structures) — farm property eligible for bonus; 150% DB unless elected out", "15-year", "Not depreciable"], 1, "Farm assets have their own class lives."),
    mc("Computer software purchased off-the-shelf is…", ["§197 15-year", "36-month straight-line (or §179/bonus eligible)", "5-year MACRS", "Expensed always"], 1, "Unless acquired as part of a business (then §197)."),
    tf("Land improvements such as parking lots and fences are 15-year property eligible for bonus depreciation, while land itself is never depreciable.", true, "Always separate land from improvements in a purchase allocation."),
  ]],
]);

addLessons("x03", [
  ["Scenario: Choice of Entity for a New Business", "Two founders, $400,000 expected profit, one will work in the business. Compare LLC/partnership, S corp, and C corp after all taxes — including SE tax, §199A, and QSBS.", [
    fill("Partnership: each founder's share $200,000 (all SE income). SE tax approximation for one founder (2026 SS base $184,500): 12.4% on 92.35% × 200,000 up to the base + 2.9% Medicare on all. (Round.)", 28245, "Net SE earnings 184,700 → SS 12.4% × 184,500 = 22,878 + Medicare 2.9% × 184,700 = 5,356 → 28,234 ± rounding.", { tol: 60 }),
    fill("S corp: founder takes $120,000 reasonable salary; $80,000 distribution. Combined FICA (employee + employer) on salary?", 18360, "120,000 × 15.3%."),
    fill("Approximate SE/FICA savings per working founder from the S corp structure?", 9885, "28,245 − 18,360 ≈ 9,885 — before considering §199A interaction and payroll costs.", { tol: 100 }),
    mc("§199A impact: S corp wages REDUCE QBI (salary isn't QBI) but also provide W-2 wages for the limitation. For a founder under the income threshold…", ["S corp always wins", "The salary reduces the 20% deduction (200,000 × 20% = 40,000 vs 80,000 × 20% = 16,000) — offsetting part of the SE savings", "No effect", "Partnership can't claim §199A"], 1, "Model both effects; the optimum is often a moderate salary."),
    mc("C corp: $400,000 profit taxed at 21% = $84,000; remaining distributed as qualified dividends at 15–23.8%. Combined rate ≈ 36–40%. Compared to pass-through top rates (37% less §199A), a C corp is attractive when…", ["Always", "Profits will be retained and reinvested for years, or QSBS (§1202) exclusion is expected at exit", "Never", "Profit is small"], 1, "Double taxation only bites on distribution."),
    mc("The founders expect to sell in 6 years for $20M. Which structure could exclude most of the gain?", ["S corp", "C corp with §1202 QSBS (up to greater of $15M or 10× basis per shareholder, OBBBA)", "Partnership", "LLC taxed as partnership"], 1, "Requirements: domestic C corp, < $75M gross assets at issuance, active business, original issuance, 5-year hold (3/4-year partial tiers)."),
    mc("Founders contribute IP (basis $0, FMV $500,000) to the C corp for stock. Tax?", ["$500,000 gain", "No gain under §351 if the transferor group has 80% control after the exchange", "Ordinary income", "Capital gain"], 1, "Watch boot and services-for-stock (taxable)."),
    mc("One founder will contribute services only for a 30% interest in an LLC (partnership). A capital interest received for services is…", ["Tax-free", "Ordinary income at FMV of the capital interest; a PROFITS interest (Rev. Proc. 93-27) can be tax-free", "Capital gain", "Deferred"], 1, "Structure as a profits interest with §83(b)."),
    tf("An LLC can elect to be taxed as an S corporation by filing Form 2553 (and, if needed, Form 8832) if it meets S corp eligibility.", true, "Check-the-box flexibility."),
  ]],
  ["Partnership Allocations, Distributions & Hot Assets", "§704(b) capital accounts, targeted allocations, §731/§732 distributions, §751 hot assets, and §736 retirement payments.", [
    mc("For an allocation to have 'substantial economic effect', the partnership agreement must provide for…", ["Equal allocations", "Capital accounts maintained per §704(b) regs, liquidation per positive capital accounts, and a deficit restoration obligation or qualified income offset", "Pro rata everything", "Written consent"], 1, "The 'big three' (or alternate test)."),
    mc("Targeted (forced) allocations differ from layer-cake allocations by…", ["Ignoring capital accounts", "Allocating income/loss so ending capital accounts equal what each partner would receive under the distribution waterfall", "Being illegal", "Applying only to LLCs"], 1, "Standard in PE/real estate deals."),
    fill("Partner's outside basis $70,000. Receives a current distribution of cash $20,000 and property with inside basis $60,000 (FMV $90,000). Partner's basis in the property?", 50000, "Basis after cash = 50,000; property takes carryover basis limited to remaining outside basis: 50,000 (§732(a)(2)). Outside basis → 0."),
    mc("Same facts but a LIQUIDATING distribution. Partner's basis in the property?", ["$60,000", "$50,000 — substituted basis: remaining outside basis after cash (§732(b))", "$90,000", "$0"], 1, "Liquidating distributions use substituted basis."),
    mc("Partner sells a 25% interest for $300,000. Partnership has unrealized receivables (cash-basis A/R) of $200,000 and appreciated inventory. Under §751(a), the partner's gain is…", ["All capital", "Ordinary to the extent of the partner's share of hot assets (25% × 200,000 = 50,000 from A/R, plus inventory appreciation); balance capital", "All ordinary", "Deferred"], 1, "Hot asset lookthrough."),
    mc("A partnership distributes cash to Partner A while Partner B receives the appreciated inventory (disproportionate). §751(b)…", ["Doesn't apply", "Treats the exchange of hot assets for cold assets between the partners as a taxable sale", "Applies only to corporations", "Defers all gain"], 1, "Disproportionate distribution rules."),
    mc("A retiring general partner in a services partnership receives payments for goodwill not provided for in the agreement. Under §736(a), these are…", ["Capital gain", "Guaranteed payments/distributive share — ordinary to the partner, deductible to the partnership", "Return of capital", "Tax-free"], 1, "§736(b) covers payments for property interest (capital treatment)."),
    mc("Partner contributes property subject to a nonrecourse liability exceeding basis. Gain?", ["Always", "Only if the deemed distribution from net liability relief exceeds outside basis (§752/§731) — allocation of the liability back to the partner often avoids gain", "Never", "Ordinary"], 1, "§752 allocations matter."),
    tf("A partnership must revalue (book-up) capital accounts under §704(b) when a new partner is admitted for cash, to preserve existing partners' unrealized appreciation.", false, "Revaluation is OPTIONAL (permitted, not required) — but nearly always done; without it, §704(c) principles don't protect the built-in gain."),
  ]],
]);

addLessons("x04", [
  ["Scenario: High-Income Couple's 2026 Return", "Wages, RSUs, rental loss, capital gains, charitable bunching, backdoor Roth. Compute and plan.", [
    fill("W-2 wages $520,000 combined; RSU vesting $180,000 (already in W-2). Additional Medicare tax on wages over $250,000 (MFJ)?", 2430, "270,000 × 0.9% — employers withhold at $200,000 each, so a true-up is likely on the return."),
    fill("Long-term gains $90,000; qualified dividends $20,000; taxable income ≈ $650,000. NIIT?", 4180, "MAGI well over 250,000; NII = 110,000 × 3.8%."),
    mc("Rental (active participation) shows a $30,000 loss. AGI $700,000. Deductible this year?", ["$30,000", "$0 — $25,000 allowance fully phased out above $150,000 AGI; suspended", "$25,000", "$15,000"], 1, "Carries forward until passive income or disposition."),
    mc("They give $15,000/yr to charity and take the standard deduction ($32,200). Bunching 3 years ($45,000) into a donor-advised fund in 2026 yields itemized deductions of $45,000 + SALT (capped, subject to phase-down at their income to $10,000) + mortgage interest $12,000 = $67,000 vs. standard. Extra deduction over 3 years vs annual giving?", ["$0", "≈$34,800 (67,000 − 32,200) in 2026 versus little or no benefit annually", "$45,000", "$15,000"], 1, "OBBBA also added a 0.5%-of-AGI floor on itemized charitable deductions starting 2026 — factor it in."),
    mc("Donating appreciated stock (FMV $45,000, basis $10,000, held 3 years) to the DAF instead of cash…", ["Same result", "Deduct FMV $45,000 (30% AGI limit) AND avoid $35,000 of capital gain + NIIT", "Deduct basis only", "Not allowed"], 1, "Classic high-income strategy."),
    mc("Backdoor Roth: contribute $7,500 nondeductible to a traditional IRA and convert. Trap?", ["None", "Pro-rata rule — if they hold other pre-tax IRA balances (e.g., a rollover IRA), the conversion is partly taxable", "Excess contribution", "Age limit"], 1, "Roll pre-tax IRAs into a 401(k) first."),
    mc("RSU shares sold immediately at vest for the vest-date price. Capital gain?", ["Large gain", "≈$0 — basis equals the FMV included in W-2; brokers may report $0 basis on 1099-B → adjust on Form 8949", "Ordinary income again", "Loss"], 1, "Double-taxation trap if basis isn't corrected."),
    mc("They exercised ISOs with a $200,000 bargain element and held. Effect?", ["Ordinary income", "AMT preference — likely triggers AMT; consider exercising up to the AMT crossover or disqualifying dispositions", "No effect", "Capital gain"], 1, "Run the AMT projection before year end."),
    mc("Mega backdoor Roth requires…", ["A Roth IRA only", "A 401(k) plan allowing after-tax contributions and in-plan Roth conversions/in-service withdrawals, up to the §415(c) limit (~$72,000 in 2026)", "Self-employment", "Age 50+"], 1, "Plan-document dependent."),
    tf("Tax-loss harvesting $40,000 of losses against the $90,000 of gains reduces both regular tax and NIIT.", true, "Beware wash sales across all accounts including IRAs and spouse."),
  ]],
  ["Estates, Gifts & Trusts Essentials", "Annual exclusion, lifetime exemption ($15M in 2026 under OBBBA), portability, step-up in basis, grantor trusts, and fiduciary income tax basics.", [
    mc("2026 annual gift tax exclusion per donee?", ["$17,000", "$18,000", "$19,000", "$20,000"], 2, "$19,000 (unchanged from 2025); married couples can split to $38,000."),
    mc("2026 federal estate/gift basic exclusion amount?", ["$5.49M", "$13.99M", "$15,000,000 (OBBBA, indexed thereafter)", "Unlimited"], 2, "Made permanent — no 2026 sunset."),
    mc("Inherited stock (decedent's basis $50,000, FMV at death $400,000) sold by heir for $410,000. Gain?", ["$360,000", "$10,000 — stepped-up basis to FMV at death (§1014); always long-term", "$0", "$400,000"], 1, "Gifted property, by contrast, takes carryover basis (§1015)."),
    mc("Portability allows…", ["Gifts to skip tax", "A surviving spouse to use the deceased spouse's unused exclusion (DSUE) — requires timely filing Form 706 even if no tax due", "Unlimited exclusions", "Basis step-up twice"], 1, "Rev. Proc. 2022-32 allows late elections up to 5 years."),
    mc("An intentionally defective grantor trust (IDGT) is 'defective' because…", ["It's invalid", "The grantor pays the income tax (trust is disregarded for income tax) while assets are outside the estate — a tax-free gift of the tax payments", "It's revocable", "Beneficiaries pay tax"], 1, "Powerful estate freeze tool."),
    mc("A complex trust has DNI of $60,000 and distributes $40,000. Trust's distribution deduction and beneficiary's income?", ["$60,000 / $60,000", "$40,000 / $40,000 — DNI caps both; the trust pays tax on the retained $20,000 at compressed brackets", "$0 / $0", "$40,000 / $60,000"], 1, "Trusts hit 37% at only ~$16,000 of income."),
    mc("The 65-day rule (§663(b)) lets a trust…", ["Extend its return", "Treat distributions made within 65 days after year end as made in the prior year — useful for pushing income to lower-bracket beneficiaries", "Avoid filing", "Defer DNI"], 1, "Election on Form 1041."),
    mc("A gift of a $500,000 rental property to a child during life vs. at death. Income tax perspective?", ["Same", "Lifetime gift = carryover basis (child inherits built-in gain); at death = step-up. For appreciated assets, holding until death often wins if no estate tax exposure", "Gift always better", "Death always worse"], 1, "Balance estate tax vs income tax basis."),
    tf("Form 709 must be filed for any gift to one person exceeding the annual exclusion, even if no gift tax is due because the lifetime exemption covers it.", true, "It tracks exemption usage and starts the statute of limitations (with adequate disclosure)."),
  ]],
]);

addLessons("x05", [
  ["Scenario: Payroll Tax Audit Defense", "The IRS and state agency audit a 120-employee company. Work through each finding: classification, fringes, late deposits, and the officer's personal exposure.", [
    mc("Finding 1: 15 'contractors' paid $900,000 over 3 years worked full-time, on-site, with company equipment. Company filed 1099s consistently and relied on industry practice. Best defense?", ["None", "Section 530 relief — reasonable basis (industry practice), substantive consistency, reporting consistency; if denied, §3509 reduced rates", "Pay everything", "Blame the workers"], 1, "Document the industry practice with evidence (25% of industry is a safe harbor)."),
    fill("If Section 530 fails but §3509 applies (1099s filed): employer owes full employer FICA 7.65% + 20% of employee FICA (1.53%) + 1.5% FIT on $900,000. Total?", 96120, "900,000 × (7.65% + 1.53% + 1.5%) = 96,120 — versus ~$400K+ under full liability with penalties."),
    mc("Finding 2: Company cars with no personal-use tracking. IRS position?", ["De minimis", "100% of the annual lease value is taxable wages absent substantiation of business use; propose reconstructing logs and adopting a written policy", "No adjustment", "Employer expense only"], 1, "Reg. §1.132-5; substantiation is the employer's burden."),
    mc("Finding 3: $30,000 of 'per diem' paid at IRS rates without requiring expense reports or travel documentation. Treatment?", ["Excludable", "Nonaccountable plan → wages; per diem under accountable plans still requires time/place/purpose substantiation", "Deductible only", "Fine as is"], 1, "Rev. Proc. 2019-48."),
    mc("Finding 4: Twelve late semiweekly deposits averaging 6–15 days. Penalty tier?", ["2%", "5%", "10%", "15%"], 1, "Request abatement: first-time abate (FTA) for one period; reasonable cause for others."),
    mc("Finding 5: Q4 2024 941 unpaid ($180,000: $120,000 trust fund). CFO signed checks to vendors that quarter. Exposure?", ["Corporate only", "CFO faces personal TFRP of $120,000 under §6672; IRS conducts Form 4180 interviews to establish responsibility and willfulness", "Only penalties", "Only CEO"], 1, "Paying any creditor while knowing taxes are unpaid = willfulness."),
    mc("The state agency separately asserts SUTA on the reclassified workers. Interaction with federal?", ["Federal covers it", "Separate liability — state uses its own (often ABC) test which is stricter; federal Section 530 relief doesn't bind the state", "State waits for IRS", "No state liability"], 1, "Multi-agency exposure."),
    order("Order the recommended remediation", ["Engage counsel/CPA under Kovel if fraud risk exists", "Reconstruct records and quantify exposure under each theory", "Assert Section 530 / §3509 / reasonable cause", "Enter VCSP for prospective reclassification if eligible", "Adopt written policies: classification review, fringe tracking, deposit controls", "Consider CPEO or payroll provider with liability assumption"], "Defense first, then prevention."),
  ]],
  ["Special Payroll Situations", "Nonresident aliens, expatriates, household employees, restaurants (FICA tip credit), agricultural, and terminations.", [
    mc("An F-1 student on OPT works for the company. FICA?", ["Withhold normally", "Exempt from FICA while a nonresident alien under the 5-year rule (§3121(b)(19)); FIT withholding applies with special W-4 rules", "Exempt from all tax", "Only Medicare"], 1, "Track the substantial presence test."),
    mc("A restaurant pays $2.13 cash wage + tips. Employer FICA tip credit (§45B)…", ["Doesn't exist", "Credit for employer FICA paid on tips exceeding the amount needed to reach $5.15/hr (frozen minimum) — reported on Form 8846", "Reduces employee tax", "Applies to all tips"], 1, "Valuable for restaurants; reduces the deduction correspondingly."),
    mc("Tips reported by employees are…", ["Employer income", "Employee wages subject to FIT and FICA withholding from the employee's cash wages; employer pays matching FICA; allocated tips (8% rule) if underreported", "Not taxable", "Taxable to the restaurant"], 1, "Form 8027 for large food establishments."),
    fill("A U.S. employee on a 2-year assignment to Germany has a certificate of coverage under the totalization agreement. U.S. FICA on $200,000 salary?", 15300, "Still fully U.S. FICA (7.65% × 200,000) — totalization means NO German social tax; without a certificate, both might apply."),
    mc("Nanny paid $28,000/yr by a family. Requirements?", ["None — casual labor", "Schedule H with the family's 1040: FICA (threshold $2,800 in 2025/indexed), FUTA over $1,000/quarter, W-2; state registration", "1099-NEC", "Only W-2"], 1, "The 'nanny tax'."),
    mc("Severance of $50,000 paid in a lump sum. Withholding?", ["Exempt", "Supplemental wages — 22% flat (or aggregate) FIT, plus FICA (Quality Stores: severance is FICA wages)", "No FICA", "Capital gain"], 1, "SUB-pay plans are the narrow exception."),
    mc("Accrued vacation paid at termination in a state that requires payout (e.g., California). Payroll treatment?", ["Not wages", "Regular wages subject to all withholding; final paycheck timing rules (CA: immediately on discharge) carry waiting-time penalties", "1099", "Supplemental only"], 1, "State final-pay rules vary widely."),
    mc("Agricultural employer with $150,000 of farm wages files…", ["Form 941", "Form 943 (annual) — FICA applies if $150 test or $2,500 total test met; different FUTA thresholds ($20,000/quarter or 10 employees)", "Schedule H", "Form 944"], 1, "Farm payroll has its own forms and thresholds."),
    tf("Deferred compensation under a nonqualified plan (§409A) is subject to FICA when vested (special timing rule), even if paid years later.", true, "Rule of administrative convenience/non-duplication."),
  ]],
]);

addLessons("x06", [
  ["Scenario: Tax Due Diligence on an Acquisition Target", "You're reviewing a $40M S corp target. Find the exposures, quantify them, and structure protections.", [
    mc("The S election was made in 2015 but one shareholder is an LLC taxed as a partnership. Consequence?", ["Fine", "Invalid/terminated S election — target may be a C corp with unpaid taxes; seek PLR/Rev. Proc. 2022-19 relief and an indemnity", "No issue if small", "Only state issue"], 1, "S corp eligibility failures are the #1 due diligence finding."),
    mc("Target has sales in 22 states but files sales tax in 4. Post-Wayfair economic nexus thresholds ($100K/200 transactions) are exceeded in 15 states. Exposure?", ["None — buyer's problem later", "Uncollected sales tax for open years (no statute if no return filed) + penalties; quantify, negotiate escrow, consider VDAs pre-closing", "Only income tax", "Ignore"], 1, "Sales tax exposure often exceeds income tax exposure in deals."),
    mc("Target deducted $2M of R&E in 2023 rather than capitalizing under old §174. Under OBBBA's §174A, target…", ["Has permanent exposure", "Can amend/elect to deduct retroactively (small business) or take the remaining unamortized amount — verify the method change and 2023–2024 exposure", "Owes penalties automatically", "No issue"], 1, "Transition rules matter."),
    mc("Target's officers received large 'distributions' with $40,000 salaries. Buyer's concern?", ["None", "Reasonable compensation exposure (back FICA + penalties) for open years — seller indemnity", "Only seller's problem", "Reduces price only"], 1, "Survives the deal via successor liability in a stock purchase."),
    mc("Deal structure: buyer wants a step-up; sellers want capital gain and one level of tax. Best fit for an S corp target?", ["Stock sale", "Stock sale with §338(h)(10) or §336(e) election — deemed asset sale, step-up, generally single level of tax (watch ordinary recapture and state tax)", "C corp conversion first", "Asset sale only"], 1, "Also consider F-reorganization (LLC drop-down) to preserve rollover equity."),
    mc("Sellers roll 20% into buyer's LLC. An F-reorg structure (new S corp holdco, old S corp becomes QSub then LLC) allows…", ["Nothing special", "A partial tax-deferred rollover under §721 while the buyer gets a step-up on the 80% purchased", "Full deferral", "Ordinary income"], 1, "Standard private-equity structure for S corp targets."),
    mc("Transaction tax deductions (banker fees, bonuses paid at close) belong to…", ["Buyer", "Generally the seller/target's pre-closing period — negotiate who benefits (often 'seller-favorable' allocation) and address in the purchase agreement", "Neither", "Split 50/50 by law"], 1, "Next-day rule and 70% safe harbor election."),
    mc("A tax indemnity and escrow (e.g., 10% for 3 years) protects the buyer from…", ["Future taxes", "Pre-closing tax liabilities, including audit adjustments and unfiled state returns; R&W insurance typically excludes known issues", "Nothing", "Buyer's own taxes"], 1, "Known exposures → specific indemnity/escrow; unknown → RWI."),
    tf("In a stock acquisition, the target's NOLs and tax attributes survive but are subject to §382 limitation; in an asset acquisition, they stay with the seller.", true, "Attribute analysis is a core diligence step."),
  ]],
  ["State & Local, International Basics", "Nexus, apportionment, PTE elections, sales tax, GILTI/NCTI, FDII/FDDEI, transfer pricing, and Pillar Two awareness.", [
    mc("A pass-through entity tax (PTET) election lets…", ["Owners skip state tax", "The entity pay state tax and deduct it federally, bypassing the individual SALT cap; owners get a state credit — still valuable despite the higher 2026 cap for high earners", "Avoid all state tax", "Defer tax"], 1, "36+ states; elections and deadlines vary."),
    fill("Single-sales-factor state: total sales $10M; in-state sales $2.5M; taxable income $4M. Apportioned income?", 1000000, "25% × 4M."),
    mc("Market-based sourcing for services means…", ["Source where performed", "Source to where the customer receives the benefit — a remote consultant may owe tax in the client's state", "Source to HQ", "No tax"], 1, "Most states now use market sourcing."),
    mc("Public Law 86-272 protects a company from state income tax if its only in-state activity is…", ["Any sales", "Solicitation of orders for tangible personal property approved and shipped from outside the state — not services/SaaS; states increasingly view website interactions as exceeding protection (MTC statement)", "Having employees", "Owning property"], 1, "Narrow and eroding."),
    mc("A U.S. corporation's controlled foreign corporation earns $5M of active income with little tangible property. U.S. tax consequence (post-OBBBA)?", ["None until repatriated", "Net CFC Tested Income (formerly GILTI) inclusion with a 40% deduction → ~12.6% effective rate before foreign tax credits (90% creditable)", "Full 21%", "Subpart F only"], 1, "OBBBA renamed and adjusted GILTI/FDII rates for 2026+."),
    mc("Transfer pricing documentation (§6662(e)) protects against…", ["Audits", "20%/40% penalties on adjustments — contemporaneous documentation supporting arm's-length pricing", "Withholding tax", "State tax"], 1, "Also required in most countries (Master/Local file)."),
    mc("A U.S. company pays a $100,000 royalty to a foreign licensor in a country with no treaty. Withholding?", ["0%", "30% FDAP withholding, remitted via Form 1042; treaties may reduce (W-8BEN-E required)", "21%", "15%"], 1, "Chapter 3 withholding."),
    mc("Pillar Two (15% global minimum tax) affects…", ["All companies", "Multinational groups with ≥ €750M revenue — U.S. groups may face top-up taxes abroad (IIR/UTPR), subject to the 2025 G7 'side-by-side' agreement exempting U.S.-parented groups from IIR/UTPR", "Only EU companies", "Small businesses"], 1, "Monitor OECD developments; QDMTTs still apply locally."),
    tf("Foreign bank accounts exceeding $10,000 in aggregate at any time during the year require an FBAR (FinCEN 114) filing, separate from Form 8938.", true, "Penalties for willful non-filing are severe."),
  ]],
]);

})(window.LL);
