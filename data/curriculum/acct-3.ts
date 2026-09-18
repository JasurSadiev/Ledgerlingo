/* Accounting track — Topics 20–33 */
import { mc, tf, dc, fill, je, match, order, unit } from "./authoring";

export function register(): void {
const T = "accounting";

unit(T, "t20", "20. Payroll Accounting", "Gross pay, withholdings (2026 figures), employer taxes, journal entries, deposits & forms", [
  ["Gross Pay & Overtime", "FLSA: non-exempt employees earn 1.5× the regular rate for hours over 40 in a workweek. Non-discretionary bonuses must be included in the regular rate. Pay periods/yr: weekly 52, biweekly 26, semimonthly 24, monthly 12.", [
    fill("Employee earns $22/hr and works 47 hours. Gross pay?", 1111, "40 × 22 = 880; 7 × 33 = 231; total $1,111."),
    fill("Annual salary $78,000 paid semimonthly. Gross per paycheck?", 3250, "78,000 ÷ 24 = $3,250."),
    fill("Employee earns $16/hr, works 44 hours, and receives a $88 non-discretionary production bonus. Total gross pay (FLSA regular-rate method)?", 828, "Straight time 704 + 88 = 792; regular rate = 792/44 = 18.00; OT premium = 4 × 0.5 × 18 = 36; gross = $828."),
    mc("Which is required for an employee to be EXEMPT under the executive exemption?", ["Paid hourly", "Salary basis, at least the federal salary threshold, and primary duty of managing with authority over 2+ FTEs", "Works from home", "Has a college degree"], 1, "All three tests: salary basis, salary level, duties."),
    mc("An employee works 45 hours in week 1 and 35 in week 2 of a biweekly period. Overtime hours owed?", ["0", "5", "10", "2.5"], 1, "Each workweek stands alone under the FLSA — no averaging."),
    tf("Tipped employees can be paid a $2.13/hr cash wage federally as long as tips bring them to at least $7.25/hr.", true, "Tip credit rules; many states require higher cash wages."),
    match("Match the pay frequency to periods per year", [["Weekly", "52"], ["Biweekly", "26"], ["Semimonthly", "24"], ["Monthly", "12"]], "Biweekly years occasionally have 27 pay periods — a payroll planning issue."),
  ]],
  ["Employee Withholdings (FICA & Income Tax)", "2026: Social Security 6.2% up to $184,500 wage base; Medicare 1.45% no limit; Additional Medicare 0.9% withheld on wages over $200,000 (no employer match). FIT per W-4 & Pub 15-T; supplemental flat rate 22%.", [
    fill("Gross $3,250. Social Security withholding?", 201.5, "3,250 × 6.2% = $201.50.", { tol: 0.01 }),
    fill("Gross $3,250. Medicare withholding?", 47.13, "3,250 × 1.45% = $47.125 ≈ $47.13.", { tol: 0.01 }),
    fill("YTD wages $182,000; current gross $6,000. Social Security tax withheld this check (2026 base $184,500)?", 155, "Only 2,500 is taxable: 2,500 × 6.2% = $155."),
    fill("Maximum 2026 employee Social Security tax?", 11439, "184,500 × 6.2% = $11,439."),
    fill("Executive's YTD wages $198,000; this check $10,000. Additional Medicare Tax withheld?", 72, "Excess over 200,000 = 8,000 × 0.9% = $72 (plus regular 1.45% on all 10,000)."),
    mc("Pre-tax Section 125 health premiums reduce wages for…", ["Federal income tax only", "FICA only", "Both federal income tax and FICA", "Neither"], 2, "Cafeteria plan deductions reduce both FIT and FICA wages (and usually FUTA)."),
    mc("Traditional 401(k) deferrals reduce wages for…", ["FIT only (still subject to FICA)", "FICA only", "Both", "Neither"], 0, "Box 1 wages drop; Boxes 3 and 5 don't."),
    fill("Gross $3,250; 401(k) 6%; Section 125 health $150. Federal income tax wages?", 2905, "3,250 − 195 − 150 = $2,905. (FICA wages = 3,100.)"),
    mc("A $5,000 bonus paid on a separate check. Optional flat federal withholding?", ["$500", "$1,100", "$1,850", "$0"], 1, "22% supplemental rate × 5,000 = $1,100."),
    tf("An employee who claims 'exempt' on Form W-4 has no FICA withheld.", false, "Exempt status applies only to federal income tax withholding; FICA still applies."),
  ]],
  ["Net Pay & Employer Taxes", "Employer FICA matches 6.2% + 1.45%. FUTA 6.0% on first $7,000 less 5.4% credit = 0.6% ($42 max/employee). SUTA varies by state (experience-rated).", [
    fill("Gross $3,250; SS 201.50; Medicare 47.13; FIT 310; state tax 95; 401(k) 195; health 150. Net pay?", 2251.37, "3,250 − 998.63 = $2,251.37.", { tol: 0.02 }),
    fill("Total payroll $48,000 (all under wage bases). Employer FICA?", 3672, "48,000 × 7.65% = $3,672."),
    fill("Employee YTD wages $6,400; this check $1,200. FUTA taxable wages this check?", 600, "7,000 − 6,400 = $600 → FUTA 0.6% × 600 = $3.60."),
    fill("SUTA rate 2.7%, state wage base $9,000. Employee YTD $8,000; this check $1,500. SUTA due?", 27, "Taxable 1,000 × 2.7% = $27."),
    mc("A state that has not repaid federal unemployment loans is a 'credit reduction state'. Effect on employers there?", ["Lower FUTA", "Higher effective FUTA (reduced 5.4% credit), reported on Schedule A of Form 940", "No effect", "SUTA is waived"], 1, "Credit reductions raise the employer's FUTA above 0.6%."),
    fill("Total employer cost: wages $48,000; FICA 7.65%; FUTA $180; SUTA $1,100; health $5,200; 401(k) match $1,440. Total?", 59592, "48,000 + 3,672 + 180 + 1,100 + 5,200 + 1,440 = $59,592."),
    tf("The employer's share of FICA is withheld from the employee's paycheck.", false, "The employer's share is an employer expense — it never reduces net pay."),
    mc("Workers' compensation premiums are based on…", ["Employee W-4 entries", "Payroll dollars by job classification (risk class) × rate", "Number of employees only", "Net income"], 1, "High-risk classes (roofing) carry much higher rates than clerical."),
  ]],
  ["Payroll Journal Entries", "Entry 1: Dr Wages Expense (gross) / Cr withholding liabilities + Wages Payable (net). Entry 2: Dr Payroll Tax Expense / Cr FICA, FUTA, SUTA Payable. Entry 3: Dr Wages Payable / Cr Cash. Remittances: Dr liabilities / Cr Cash.", [
    je("Record gross wages $48,000: FICA withheld $3,672; FIT $6,100; state tax $1,900; 401(k) $2,880; net to employees.", ["Wages Expense", "FICA Taxes Payable", "Federal Income Tax Payable", "State Income Tax Payable", "401(k) Contributions Payable", "Wages Payable", "Payroll Tax Expense"], ["Wages Expense"], ["FICA Taxes Payable", "Federal Income Tax Payable", "State Income Tax Payable", "401(k) Contributions Payable", "Wages Payable"], "Net = 48,000 − 3,672 − 6,100 − 1,900 − 2,880 = 33,448 to Wages Payable."),
    fill("From the entry above, amount credited to Wages Payable?", 33448, "48,000 − 14,552 = $33,448."),
    je("Record employer payroll taxes: FICA $3,672; FUTA $180; SUTA $1,100.", ["Payroll Tax Expense", "FICA Taxes Payable", "FUTA Taxes Payable", "SUTA Taxes Payable", "Wages Expense", "Cash"], ["Payroll Tax Expense"], ["FICA Taxes Payable", "FUTA Taxes Payable", "SUTA Taxes Payable"], "Dr Payroll Tax Expense 4,952."),
    je("Record the employer's 401(k) match of $1,440 and health insurance contribution of $5,200 (to be remitted later).", ["Employee Benefits Expense", "401(k) Contributions Payable", "Health Insurance Payable", "Cash", "Wages Expense"], ["Employee Benefits Expense"], ["401(k) Contributions Payable", "Health Insurance Payable"], "Benefits are employer expenses with corresponding liabilities."),
    fill("Total FICA Taxes Payable after both entries?", 7344, "3,672 employee + 3,672 employer = $7,344."),
    je("Deposit federal taxes via EFTPS: FICA $7,344 + FIT $6,100.", ["FICA Taxes Payable", "Federal Income Tax Payable", "Cash", "Payroll Tax Expense"], ["FICA Taxes Payable", "Federal Income Tax Payable"], ["Cash"], "Settling liabilities — no expense."),
    je("Year-end accrual: 3 days of wages ($9,000) earned but unpaid (ignore withholdings).", ["Wages Expense", "Accrued Wages Payable", "Cash", "Prepaid Wages"], ["Wages Expense"], ["Accrued Wages Payable"], "Also accrue the employer FICA on those wages for a complete accrual."),
    mc("Withheld employee taxes not yet remitted are called 'trust fund taxes' because…", ["They earn interest", "They belong to the employees/government and responsible persons can be personally liable (IRC §6672 penalty, 100%)", "They're invested in a trust", "They're optional"], 1, "The Trust Fund Recovery Penalty pierces the corporate veil."),
  ]],
  ["Deposits, Forms & Compliance", "Form 941 quarterly (FIT + both FICA halves); Form 940 annual (FUTA); W-2/W-3 to SSA by Jan 31; 1099-NEC for contractors ≥ $600. Deposit schedule from lookback period: ≤$50,000 → monthly; >$50,000 → semiweekly; $100,000 accumulated → next-day.", [
    match("Match the form to its purpose", [["Form 941", "Quarterly federal payroll tax return"], ["Form 940", "Annual FUTA return"], ["Form W-2", "Annual wage & tax statement"], ["Form W-4", "Employee withholding certificate"], ["Form I-9", "Employment eligibility verification"], ["Form 1099-NEC", "Nonemployee compensation"]], "Core payroll compliance forms."),
    mc("Lookback-period liability was $62,000. Deposit schedule for this year?", ["Monthly", "Semiweekly", "Annual", "Quarterly"], 1, "Over $50,000 → semiweekly: Wed/Thu/Fri paydays deposit by next Wed; Sat–Tue by next Fri."),
    mc("A semiweekly depositor pays employees Friday. Federal deposit is due by…", ["Same day", "The following Wednesday", "The following Friday", "The 15th of next month"], 1, "Wed–Fri paydays → following Wednesday."),
    tf("If accumulated liability hits $100,000 on any day, the deposit is due the next business day — and a monthly depositor becomes semiweekly for the rest of the year and next.", true, "The $100,000 next-day rule."),
    mc("Form 941 for Q2 (Apr–Jun) is due…", ["June 30", "July 31", "August 15", "October 31"], 1, "Last day of the month after quarter end (10 extra days if all deposits were timely)."),
    mc("FUTA must be deposited quarterly once cumulative undeposited liability exceeds…", ["$100", "$500", "$1,000", "$2,500"], 1, "Otherwise carry forward; pay with Form 940 by Jan 31."),
    mc("A worker sets own hours, uses own tools, serves multiple clients, and can profit or lose. Most likely classification?", ["Employee", "Independent contractor", "Statutory employee", "Officer"], 1, "IRS common-law factors: behavioral control, financial control, relationship."),
    mc("Employer misclassifies an employee as a contractor. Potential exposure includes…", ["Nothing if a 1099 was filed", "Back FICA (both halves), FUTA, FIT, penalties, interest, benefits claims; possible §3509 reduced rates if unintentional", "Only the employee's share", "Only state penalties"], 1, "Section 530 relief may apply if there's a reasonable basis and consistent treatment."),
    mc("Payroll records must be kept for at least…", ["1 year", "2 years", "4 years (IRS); FLSA 3 years payroll / 2 years time cards", "10 years"], 2, "Retention rules overlap; keep the longest."),
    fill("W-2 Box 1 = $61,500; Box 3 = $67,000; Box 5 = $67,000. Employee's traditional 401(k) deferrals?", 5500, "67,000 − 61,500 = $5,500 (reduces Box 1 but not FICA wages)."),
  ]],
]);

unit(T, "t21", "21. Bonds Payable", "Issuance at par/discount/premium, effective-interest amortization, retirement", [
  ["Issuance & Amortization", "Issue price = PV of principal + PV of interest at the MARKET rate. Market > stated → discount; market < stated → premium. Effective interest: interest expense = carrying value × market rate.", [
    mc("A bond with a 6% stated rate is issued when the market rate is 8%. It sells at…", ["Par", "A discount", "A premium", "Face value plus accrued interest"], 1, "Investors demand 8%; they pay less than face to earn it."),
    fill("$500,000, 5-year, 6% bonds (semiannual) issued when the market rate is 8%. PV factors: single sum 10 periods @4% = 0.6756; annuity 10 periods @4% = 8.1109. Issue price?", 459515, "500,000 × 0.6756 = 337,800; 15,000 × 8.1109 = 121,664; total ≈ $459,464–$459,515 (rounding).", { tol: 300 }),
    fill("Using an issue price of $459,500, interest expense for the first semiannual period (effective interest, 4%)?", 18380, "459,500 × 4% = $18,380."),
    fill("Cash interest paid each period?", 15000, "500,000 × 6% × ½ = $15,000."),
    fill("Discount amortization in period 1?", 3380, "18,380 − 15,000 = $3,380; carrying value rises to 462,880."),
    je("Record the first semiannual interest payment (effective interest, discount).", ["Interest Expense", "Cash", "Discount on Bonds Payable", "Bonds Payable"], ["Interest Expense"], ["Cash", "Discount on Bonds Payable"], "Dr Interest Expense 18,380; Cr Cash 15,000; Cr Discount 3,380."),
    mc("For a bond issued at a PREMIUM, interest expense each period is…", ["Greater than cash paid", "Less than cash paid", "Equal to cash paid", "Zero"], 1, "Premium amortization reduces expense below the coupon."),
    mc("Bond issue costs under ASU 2015-03 are…", ["Expensed immediately", "Deducted from the carrying amount of the bonds (like a discount) and amortized", "Recorded as an asset", "Charged to equity"], 1, "Presented as a direct deduction from the liability."),
    tf("Straight-line amortization of a discount is acceptable under GAAP only if results are not materially different from the effective-interest method.", true, "Effective interest is the GAAP standard."),
  ]],
  ["Retirement, Accruals & Presentation", "Gain/loss on early retirement = carrying value − reacquisition price. Accrue interest between payment dates. Current maturities classified as current unless refinanced on a long-term basis.", [
    fill("Bonds with carrying value $482,000 are retired early at 99 (face $500,000). Gain or loss? (loss negative)", -13000, "Paid 495,000 vs carrying 482,000 → loss $13,000."),
    je("Record the early retirement above (face $500,000, unamortized discount $18,000, paid $495,000).", ["Bonds Payable", "Loss on Bond Retirement", "Discount on Bonds Payable", "Cash", "Gain on Bond Retirement"], ["Bonds Payable", "Loss on Bond Retirement"], ["Discount on Bonds Payable", "Cash"], "Dr Bonds 500,000; Dr Loss 13,000; Cr Discount 18,000; Cr Cash 495,000."),
    fill("$500,000 8% bonds pay interest Apr 1 & Oct 1. Interest to accrue at Dec 31?", 10000, "500,000 × 8% × 3/12 = $10,000."),
    mc("Bonds sold between interest dates: the buyer pays accrued interest. The issuer records it as…", ["Interest revenue", "A credit to Interest Payable (or Interest Expense) to be returned at the next coupon", "Bond premium", "A gain"], 1, "Issuer pays the full coupon at the next date; the accrued portion is returned."),
    mc("A callable bond gives…", ["The investor the right to demand early repayment", "The issuer the right to redeem before maturity, usually at a premium", "The right to convert to stock", "Higher tax deductions"], 1, "Convertible = investor's option to convert; callable = issuer's option."),
    mc("Zero-coupon bonds…", ["Have no interest expense", "Are issued at a deep discount and expense accrues via amortization", "Pay interest annually", "Are always short-term"], 1, "Interest expense is recognized even though no cash is paid until maturity."),
    tf("Bonds maturing within 12 months that will be refinanced with a new long-term issue (agreement completed before statements are issued) may remain long-term.", true, "ASC 470-10: intent and ability to refinance."),
    mc("The debt-to-equity impact of issuing bonds vs. stock: bonds…", ["Dilute ownership", "Increase leverage and require fixed interest, but interest is tax-deductible", "Have no fixed obligations", "Are always cheaper"], 1, "Trade-off between financial risk and cost of capital."),
  ]],
]);

unit(T, "t22", "22. Stockholders' Equity", "Common & preferred stock, treasury stock, dividends, splits, retained earnings", [
  ["Issuing Stock & Treasury Stock", "Par value → Common Stock; excess → Paid-in Capital in Excess of Par (APIC). Treasury stock (cost method) is a contra-equity debit; reissuance gains go to APIC–Treasury, losses to APIC–Treasury then Retained Earnings.", [
    je("Issue 10,000 shares of $1 par common stock for $15 per share.", ["Cash", "Common Stock", "Paid-in Capital in Excess of Par", "Retained Earnings"], ["Cash"], ["Common Stock", "Paid-in Capital in Excess of Par"], "Dr Cash 150,000; Cr Common Stock 10,000; Cr APIC 140,000."),
    je("Repurchase 1,000 shares of its own stock at $20 (cost method).", ["Treasury Stock", "Cash", "Common Stock", "Retained Earnings"], ["Treasury Stock"], ["Cash"], "Dr Treasury Stock 20,000; Cr Cash 20,000."),
    je("Reissue 400 treasury shares (cost $20) at $25.", ["Cash", "Treasury Stock", "Paid-in Capital from Treasury Stock", "Gain on Sale of Stock"], ["Cash"], ["Treasury Stock", "Paid-in Capital from Treasury Stock"], "Dr Cash 10,000; Cr Treasury 8,000; Cr APIC–Treasury 2,000. Never a 'gain' — no income from own stock."),
    je("Reissue 300 treasury shares (cost $20) at $12 when APIC–Treasury has a $2,000 balance.", ["Cash", "Paid-in Capital from Treasury Stock", "Retained Earnings", "Treasury Stock", "Loss on Sale of Stock"], ["Cash", "Paid-in Capital from Treasury Stock", "Retained Earnings"], ["Treasury Stock"], "Deficit 2,400: first exhaust APIC–Treasury (2,000), then Retained Earnings (400)."),
    mc("Treasury stock is reported as…", ["An asset", "A deduction from total stockholders' equity", "A liability", "Investment income"], 1, "Contra-equity."),
    fill("Authorized 1,000,000; issued 400,000; treasury 25,000. Shares outstanding?", 375000, "Issued − treasury = 375,000."),
    mc("Preferred stock is typically…", ["Voting with variable dividends", "Non-voting with a fixed dividend preference and liquidation preference", "Always convertible", "Recorded as debt"], 1, "Some preferred (mandatorily redeemable) IS classified as a liability under ASC 480."),
    tf("Stock issued for legal services should be recorded at the fair value of the services or the stock, whichever is more clearly determinable.", true, "Noncash issuance uses fair value."),
  ]],
  ["Dividends, Splits & Retained Earnings", "Cash dividends: declaration (liability), record date (nothing), payment. Small stock dividend (<20–25%) at fair value; large at par. Stock split — no entry, memo only. Cumulative preferred dividends in arrears are disclosed, not accrued.", [
    je("Declare a $0.50 per share cash dividend on 375,000 outstanding shares.", ["Retained Earnings", "Dividends Payable", "Cash", "Dividends Expense"], ["Retained Earnings"], ["Dividends Payable"], "Dr Retained Earnings (or Dividends) 187,500; Cr Dividends Payable. No entry on the record date."),
    mc("Treasury shares receive cash dividends?", ["Yes", "No — dividends are paid only on outstanding shares", "Only preferred", "Only if declared"], 1, "The company doesn't pay itself."),
    fill("6% cumulative preferred, $100 par, 5,000 shares. No dividends were paid last year. Total dividends this year $100,000. Common shareholders receive?", 40000, "Preferred: 30,000 arrears + 30,000 current = 60,000; common gets $40,000."),
    je("Declare a 10% stock dividend: 375,000 shares outstanding, $1 par, market price $18.", ["Retained Earnings", "Common Stock Dividend Distributable", "Paid-in Capital in Excess of Par", "Cash"], ["Retained Earnings"], ["Common Stock Dividend Distributable", "Paid-in Capital in Excess of Par"], "37,500 shares × 18 = 675,000 from RE; 37,500 to distributable (par); 637,500 to APIC."),
    mc("A 2-for-1 stock split…", ["Doubles retained earnings", "Requires no journal entry; par per share halves and shares double", "Is recorded at market value", "Reduces total equity"], 1, "Total equity unchanged; only a memo entry."),
    mc("Dividends in arrears on cumulative preferred stock are…", ["Accrued as a liability", "Disclosed in the notes; not a liability until declared", "Expensed", "Recorded in OCI"], 1, "No obligation exists until the board declares."),
    fill("Beginning RE $476,000; net income $110,000; cash dividends $60,000; stock dividend $75,000; prior-period error correction (net of tax) −$12,000. Ending retained earnings?", 439000, "476 + 110 − 60 − 75 − 12 = $439,000."),
    mc("A retained earnings appropriation (restriction)…", ["Sets cash aside", "Segregates a portion of RE to signal it's unavailable for dividends; no cash is involved", "Is a liability", "Reduces net income"], 1, "Often required by bond indentures or state law (treasury stock restrictions)."),
    mc("Comprehensive income for the year is $130,000 and net income is $110,000. AOCI changed by…", ["+$130,000", "+$20,000", "−$20,000", "$0"], 1, "OCI = 130,000 − 110,000 = +20,000 to AOCI."),
  ]],
]);

unit(T, "t23", "23. Nonprofit Accounting", "Net asset classes, contributions, restrictions, functional expenses (ASU 2016-14)", [
  ["Net Assets & Contributions", "Two net asset classes: without donor restrictions and with donor restrictions. Contributions are recognized when unconditional; conditional contributions wait until barriers are overcome. Releases move restricted → unrestricted when purpose/time is met.", [
    mc("Under ASU 2016-14, nonprofits report how many net asset classes?", ["One", "Two: with and without donor restrictions", "Three: unrestricted, temporarily, permanently restricted", "Four"], 1, "The old three-class model was replaced in 2018."),
    mc("A donor pledges $50,000 payable next year, unconditionally, for the youth program. Record…", ["Nothing until cash arrives", "Contribution revenue with donor restrictions and a pledge receivable now", "Deferred revenue", "Unrestricted revenue"], 1, "Unconditional promises to give are revenue when made, net of allowance and discounted if long-term."),
    mc("A foundation grant of $200,000 requires the nonprofit to first raise $100,000 in matching funds. This is…", ["Unconditional — record now", "Conditional — no revenue until the barrier (match) is met", "Exchange revenue", "A loan"], 1, "Barrier + right of return/release = condition."),
    je("The nonprofit spends $30,000 on the youth program, satisfying a donor purpose restriction. Record the RELEASE.", ["Net Assets With Donor Restrictions – Reclassification", "Net Assets Without Donor Restrictions – Reclassification", "Program Expense", "Cash"], ["Net Assets With Donor Restrictions – Reclassification"], ["Net Assets Without Donor Restrictions – Reclassification"], "Reclassification shown as 'net assets released from restrictions' on the statement of activities."),
    mc("Donated legal services that create/enhance a nonfinancial asset or require specialized skills are…", ["Never recorded", "Recognized as contribution revenue and expense at fair value", "Recorded only in the notes", "Recorded as a liability"], 1, "ASC 958-605 criteria for contributed services."),
    mc("An endowment gift where the principal must be held in perpetuity is classified as…", ["Without donor restrictions", "With donor restrictions (perpetual in nature)", "A liability", "Revenue when spent"], 1, "Earnings may be restricted or unrestricted per donor terms and UPMIFA."),
    mc("A museum charges $20 admission. This is…", ["A contribution", "Exchange (earned) revenue under ASC 606", "A restricted gift", "Not revenue"], 1, "Commensurate value exchanged = exchange transaction."),
    tf("Board-designated net assets (e.g., board sets aside $1M for a building) are reported as WITH donor restrictions.", false, "Only DONORS can restrict. Board designations remain without donor restrictions (disclosed separately)."),
  ]],
  ["Statements & Functional Expenses", "Statements: financial position, activities, cash flows, plus functional expense analysis (program vs. management & general vs. fundraising) by natural classification. Form 990 is the annual IRS return.", [
    match("Match the nonprofit statement to its for-profit counterpart", [["Statement of Financial Position", "Balance Sheet"], ["Statement of Activities", "Income Statement"], ["Statement of Cash Flows", "Statement of Cash Flows"], ["Statement of Functional Expenses", "(no direct counterpart)"]], "Terminology differs: 'change in net assets' instead of net income."),
    mc("The executive director spends 60% of time on programs, 30% on administration, 10% on fundraising. Her $100,000 salary is allocated…", ["100% to management", "$60,000 program; $30,000 M&G; $10,000 fundraising", "100% to programs", "Based on donations"], 1, "Functional allocation must use a reasonable, documented basis (time studies)."),
    fill("Total expenses $1,000,000: program $780,000, M&G $150,000, fundraising $70,000. Program expense ratio?", 78, "780 ÷ 1,000 = 78%. Watchdogs like ≥ 65–75%, but context matters.", { unit: "%", tol: 0.1 }),
    mc("Costs of a gala that includes both a fundraising appeal and an educational program are…", ["All fundraising", "Allocated between fundraising and program only if purpose, audience, and content criteria are met (joint costs)", "All program", "Not recorded"], 1, "ASC 958-720 joint cost rules are strict."),
    mc("Liquidity disclosures under ASU 2016-14 require nonprofits to show…", ["Only cash", "Financial assets available to meet general expenditures within one year, qualitative and quantitative", "Nothing", "Restricted cash only"], 1, "Helps readers assess whether restricted gifts leave enough for operations."),
    mc("Which is required to keep tax-exempt status under §501(c)(3)?", ["No revenue", "Operate for exempt purposes, no private inurement, limited lobbying, no political campaign activity, file Form 990", "Only volunteers", "State approval annually"], 1, "Failure to file Form 990 for 3 consecutive years → automatic revocation."),
    mc("Unrelated business income (UBI) of a nonprofit is…", ["Tax-free", "Taxable at corporate rates and reported on Form 990-T", "Prohibited", "Reported as a contribution"], 1, "Regularly carried on trade or business not substantially related to the exempt purpose."),
    tf("Nonprofits may report depreciation expense on their statements.", true, "Nonprofits capitalize and depreciate long-lived assets like any entity (except certain collections)."),
  ]],
]);

unit(T, "t24", "24. Break-even Point", "Contribution margin, CVP analysis, margin of safety, operating leverage", [
  ["CVP Fundamentals", "Contribution margin (CM) = Sales − Variable costs. Break-even units = Fixed costs ÷ CM per unit. Break-even $ = Fixed costs ÷ CM ratio. Target units = (Fixed + Target profit) ÷ CM per unit.", [
    fill("Selling price $50; variable cost $30; fixed costs $400,000. Break-even units?", 20000, "CM/unit = 20; 400,000 ÷ 20 = 20,000 units."),
    fill("Same data. Break-even sales dollars?", 1000000, "CM ratio 40%; 400,000 ÷ 0.40 = $1,000,000."),
    fill("Same data. Units needed for $120,000 target operating income?", 26000, "(400,000 + 120,000) ÷ 20 = 26,000."),
    fill("Same data, tax rate 25%. Units needed for $90,000 AFTER-tax profit?", 26000, "Pretax = 90,000 ÷ 0.75 = 120,000 → 26,000 units."),
    fill("Current sales 26,000 units. Margin of safety in units?", 6000, "26,000 − 20,000 = 6,000 units (23% of sales)."),
    fill("At 26,000 units: CM $520,000; operating income $120,000. Degree of operating leverage?", 4.33, "520 ÷ 120 = 4.33. A 10% sales increase → ~43% profit increase.", { unit: "x", tol: 0.02 }),
    mc("If fixed costs rise, the break-even point…", ["Falls", "Rises", "Is unchanged", "Becomes zero"], 1, "More CM is needed to cover fixed costs."),
    mc("If variable cost per unit falls, the CM ratio…", ["Falls", "Rises", "Is unchanged", "Equals fixed costs"], 1, "Higher CM per unit → higher ratio → lower break-even."),
    fill("Multi-product: 60% of units are A (CM $20) and 40% are B (CM $35). Fixed costs $520,000. Total break-even units?", 20000, "Weighted CM = 0.6×20 + 0.4×35 = 26; 520,000 ÷ 26 = 20,000 units (12,000 A + 8,000 B)."),
    tf("CVP analysis assumes costs are linear, sales mix is constant, and inventory levels don't change.", true, "Know the assumptions before relying on the result."),
  ]],
]);

unit(T, "t25", "25. Improving Profits", "Cost behavior, relevant costs, special orders, make-or-buy, constrained resources", [
  ["Relevant Costs & Decisions", "Only costs that differ between alternatives are relevant. Sunk costs never are. Watch for opportunity costs and allocated fixed costs that won't change.", [
    mc("A machine bought last year for $80,000 (book value $60,000) can be replaced. The $60,000 book value is…", ["Relevant — it's a real cost", "A sunk cost — irrelevant to the decision (except its tax effect)", "An opportunity cost", "A variable cost"], 1, "Past costs can't be changed by any decision."),
    fill("Special order: 5,000 units at $32. Variable cost $28/unit; fixed costs unchanged; idle capacity exists; no effect on regular sales. Change in operating income if accepted?", 20000, "(32 − 28) × 5,000 = +$20,000. Full cost including fixed overhead is a trap."),
    fill("Same order, but accepting it requires a $12,000 special die and displaces 1,000 regular units earning $20 CM each. Change in income?", -12000, "20,000 − 12,000 − 20,000 = −$12,000 → reject."),
    fill("Make-or-buy: part costs $14 to buy. Make costs: DM 5, DL 4, variable OH 2, allocated fixed OH 5 (of which $1/unit is avoidable). 10,000 units. Advantage of MAKING? (positive = make cheaper)", 20000, "Relevant make cost = 5 + 4 + 2 + 1 = 12 vs buy 14 → make saves $2 × 10,000 = $20,000."),
    mc("A product line shows a $30,000 loss after $90,000 of allocated common fixed costs that would continue anyway. Dropping the line would…", ["Improve profit $30,000", "Reduce company profit by $60,000 (lose its $60,000 segment margin)", "Have no effect", "Save $90,000"], 1, "Segment margin (CM − avoidable fixed) is the relevant measure."),
    fill("Constrained resource: 1,000 machine hours available. Product X: CM $40, 2 hrs/unit. Product Y: CM $30, 1 hr/unit. Unlimited demand. Maximum total CM?", 30000, "CM per hour: X $20, Y $30 → make Y: 1,000 × 30 = $30,000."),
    mc("Sell-or-process-further: joint cost $100,000 already incurred. Product can sell now for $60,000 or for $95,000 after $30,000 more processing. Decision?", ["Sell now", "Process further (+$5,000 incremental)", "Indifferent", "Depends on joint cost allocation"], 1, "Incremental revenue 35,000 > incremental cost 30,000. Joint cost is sunk."),
    mc("Which action increases profit WITHOUT increasing sales volume?", ["Raising fixed costs", "Reducing variable cost per unit or raising price with inelastic demand", "Increasing inventory", "Adding an unprofitable product line"], 1, "Improve CM per unit."),
    mc("High-low method: 8,000 units cost $58,000; 3,000 units cost $38,000. Variable cost per unit?", ["$4", "$5", "$7.25", "$12.67"], 0, "(58,000 − 38,000) ÷ (8,000 − 3,000) = $4; fixed = 58,000 − 32,000 = $26,000."),
  ]],
]);

unit(T, "t26", "26. Evaluating Business Investments", "NPV, IRR, payback, accounting rate of return, and capital budgeting judgment", [
  ["Capital Budgeting Methods", "NPV = PV of cash inflows − initial investment (accept if > 0). IRR = rate where NPV = 0. Payback ignores time value and post-payback flows. ARR uses accounting income, not cash.", [
    fill("Project: invest $100,000; cash inflows $30,000/yr for 5 years; required return 10% (annuity factor 3.7908). NPV?", 13724, "30,000 × 3.7908 = 113,724 − 100,000 = $13,724 → accept.", { tol: 5 }),
    fill("Same project. Payback period in years? (2 decimals)", 3.33, "100,000 ÷ 30,000 = 3.33 years.", { unit: "yrs", tol: 0.01 }),
    fill("Same project. Annual straight-line depreciation $20,000. Accounting rate of return on initial investment?", 10, "Income = 30,000 − 20,000 = 10,000 ÷ 100,000 = 10%.", { unit: "%", tol: 0.1 }),
    mc("The IRR of the project above is approximately…", ["8%", "10%", "15%", "20%"], 2, "100,000/30,000 = 3.333 annuity factor ≈ 15.2% for 5 periods."),
    mc("Uneven cash flows: −$50,000; then $10,000, $20,000, $25,000, $15,000. Payback period?", ["2.0 years", "2.8 years", "3.0 years", "3.5 years"], 1, "After 2 yrs: 30,000 recovered; need 20,000 of yr-3's 25,000 → 2 + 0.8 = 2.8 years."),
    mc("NPV and IRR give conflicting rankings for mutually exclusive projects. Prefer…", ["IRR", "NPV — it measures absolute value added at the required rate", "Payback", "ARR"], 1, "IRR assumes reinvestment at the IRR and can mislead with scale/timing differences."),
    fill("Profitability index for the first project (PV inflows $113,724; investment $100,000)? (2 decimals)", 1.14, "113,724 ÷ 100,000 = 1.14.", { unit: "x", tol: 0.01 }),
    mc("Which cash flow is relevant to a capital budgeting decision?", ["Sunk research costs", "Allocated existing overhead", "After-tax salvage value and working capital recovery at the project's end", "Depreciation expense itself (not its tax shield)"], 2, "Depreciation matters only through the tax shield: depreciation × tax rate."),
    fill("Annual depreciation $20,000; tax rate 21%. Annual depreciation tax shield?", 4200, "20,000 × 21% = $4,200 cash saved."),
    tf("A higher discount rate lowers the NPV of a project with conventional cash flows.", true, "Future inflows are worth less at higher rates."),
  ]],
]);

unit(T, "t27", "27. Present Value of a Single Amount", "Discounting one future amount to today", [
  ["PV of $1", "PV = FV ÷ (1 + i)^n. Use the periodic rate and number of periods (semiannual: i/2, n×2). Higher rate or longer time → lower PV.", [
    fill("PV of $10,000 received in 3 years at 8% compounded annually? (factor 0.7938)", 7938, "10,000 × 0.7938 = $7,938.", { tol: 1 }),
    fill("PV of $10,000 in 3 years at 8% compounded SEMIannually? (4%, 6 periods: 0.7903)", 7903, "More frequent compounding → slightly lower PV.", { tol: 1 }),
    fill("PV of $50,000 due in 5 years at 6%? (factor 0.7473)", 37365, "50,000 × 0.7473 = $37,365.", { tol: 1 }),
    mc("A zero-interest 2-year, $20,000 note is received for equipment when the market rate is 10%. Record the sale at…", ["$20,000", "$16,529 (20,000 × 0.8264)", "$22,000", "$18,182"], 1, "Impute interest: the note's PV is the sales price; the difference is interest revenue over 2 years."),
    fill("What rate makes $8,000 today grow to $10,000 in 3 years? (factor 0.8000 ≈ 3 periods at ?%) Round to nearest whole percent.", 8, "PV factor 0.8 for 3 periods ≈ 7.7% → 8%.", { unit: "%", tol: 0.5 }),
    fill("How many years for a PV factor of 0.5 at 7%? (Rule of 72 estimate)", 10, "72 ÷ 7 ≈ 10.3 years.", { unit: "yrs", tol: 0.5 }),
    mc("Which is an application of PV of a single amount in GAAP?", ["Payroll", "Measuring a non-interest-bearing note, asset retirement obligation, or zero-coupon bond", "Computing depreciation", "Inventory costing"], 1, "Any lump sum due in the future."),
    tf("If the discount rate is 0%, present value equals future value.", true, "No time value → no discount."),
  ]],
]);

unit(T, "t28", "28. Present Value of an Ordinary Annuity", "Discounting a series of equal payments", [
  ["PV of an Ordinary Annuity", "PVOA = PMT × [1 − (1+i)^−n] ÷ i. Ordinary annuity = payments at END of periods. Annuity due (payments at start) = PVOA × (1 + i).", [
    fill("PV of $5,000 received at the end of each year for 4 years at 6%? (factor 3.4651)", 17326, "5,000 × 3.4651 = $17,326.", { tol: 1 }),
    fill("Same payments as an annuity DUE (start of each year)?", 18365, "17,326 × 1.06 = $18,365.", { tol: 2 }),
    fill("A loan of $17,326 at 6% is repaid in 4 equal annual payments. Payment amount?", 5000, "17,326 ÷ 3.4651 = $5,000.", { tol: 1 }),
    fill("Interest portion of the FIRST payment on that loan?", 1040, "17,326 × 6% ≈ $1,040; principal = 3,960.", { tol: 1 }),
    fill("Lease: 5 annual payments of $12,000 at year end; incremental borrowing rate 7% (factor 4.1002). Initial lease liability?", 49202, "12,000 × 4.1002 = $49,202.", { tol: 2 }),
    mc("A lottery offers $1,000,000 now or $100,000/yr for 15 years. At 8% (factor 8.5595), take…", ["The annuity — worth $855,950", "The lump sum — $1,000,000 > $855,950", "Either — equal", "Depends on taxes only"], 1, "Compare PV to PV."),
    mc("Monthly payments on a 30-year mortgage at 6% use…", ["i = 6%, n = 30", "i = 0.5%, n = 360", "i = 3%, n = 60", "i = 6%, n = 360"], 1, "Periodic rate and period count must match the payment frequency."),
    fill("Bond: $1,000 face, 5% annual coupon, 3 years, market 8%. PV of coupons (factor 2.5771) plus PV of face (0.7938)?", 922.7, "50 × 2.5771 = 128.86; 1,000 × 0.7938 = 793.80; total $922.66.", { tol: 1 }),
    tf("The PV of a perpetuity paying $1,000/yr at 5% is $20,000.", true, "PMT ÷ i = 1,000 ÷ 0.05."),
  ]],
]);

unit(T, "t29", "29. Future Value of a Single Amount", "Compounding one amount forward", [
  ["FV of $1", "FV = PV × (1 + i)^n. Compounding frequency matters: effective annual rate = (1 + i/m)^m − 1.", [
    fill("FV of $10,000 invested for 5 years at 6% compounded annually? (factor 1.3382)", 13382, "10,000 × 1.3382 = $13,382.", { tol: 1 }),
    fill("FV of $10,000 for 5 years at 6% compounded quarterly? (1.5%, 20 periods: 1.3469)", 13469, "More frequent compounding → higher FV.", { tol: 1 }),
    fill("Effective annual rate for 6% compounded monthly? (2 decimals)", 6.17, "(1.005)^12 − 1 = 6.17%.", { unit: "%", tol: 0.01 }),
    fill("How many years to double money at 9%? (Rule of 72)", 8, "72 ÷ 9 = 8 years.", { unit: "yrs", tol: 0.2 }),
    fill("$25,000 invested today; you need $40,000 in 6 years. Required annual rate? (factor 1.6 ≈ ?%; nearest whole %)", 8, "1.08^6 = 1.587; 1.09^6 = 1.677 → ≈ 8.2% → 8%.", { unit: "%", tol: 0.6 }),
    mc("A company deposits $500,000 today in a sinking fund earning 5% to retire bonds in 10 years (factor 1.6289). Fund balance at maturity?", ["$750,000", "$814,450", "$1,000,000", "$500,000"], 1, "500,000 × 1.6289."),
    mc("Simple interest vs compound interest on $1,000 at 10% for 3 years — the difference is…", ["$0", "$31", "$300", "$331"], 1, "Compound 1,331 vs simple 1,300."),
    tf("FV factors are always greater than 1 when the rate is positive.", true, "Money grows forward."),
  ]],
]);

unit(T, "t30", "30. Manufacturing Overhead", "Product vs period costs, predetermined rates, applied overhead, over/under-application", [
  ["Applying Overhead", "Product costs = DM + DL + MOH (inventoried). Predetermined OH rate = estimated MOH ÷ estimated activity base. Applied OH = rate × actual activity. Difference vs actual = over/under-applied → close to COGS (or prorate).", [
    match("Classify each cost", [["Factory supervisor salary", "Manufacturing overhead"], ["Steel used in product", "Direct materials"], ["Assembly-line wages", "Direct labor"], ["Factory depreciation", "Manufacturing overhead"], ["Sales commissions", "Period cost (selling)"], ["CEO salary", "Period cost (administrative)"]], "Only manufacturing costs attach to inventory."),
    fill("Estimated MOH $600,000; estimated machine hours 40,000. Predetermined rate per MH?", 15, "600,000 ÷ 40,000 = $15/MH."),
    fill("Actual machine hours 42,000. Applied overhead?", 630000, "42,000 × 15 = $630,000."),
    fill("Actual overhead $618,000; applied $630,000. Over- or under-applied? (enter over-applied as positive)", 12000, "Applied > actual → over-applied $12,000."),
    je("Close the $12,000 over-applied overhead to Cost of Goods Sold.", ["Manufacturing Overhead", "Cost of Goods Sold", "Work in Process", "Finished Goods"], ["Manufacturing Overhead"], ["Cost of Goods Sold"], "Over-applied → reduce COGS. (Under-applied → Dr COGS / Cr MOH.)"),
    je("Record actual indirect materials used ($8,000) and factory utilities incurred ($5,000 on account).", ["Manufacturing Overhead", "Raw Materials Inventory", "Accounts Payable", "Work in Process"], ["Manufacturing Overhead"], ["Raw Materials Inventory", "Accounts Payable"], "Actual OH costs are debited to the MOH control account."),
    je("Apply overhead to production: $630,000.", ["Work in Process", "Manufacturing Overhead", "Finished Goods", "Cost of Goods Sold", "Raw Materials Inventory"], ["Work in Process"], ["Manufacturing Overhead"], "Applied OH flows into WIP with DM and DL."),
    fill("Job 101: DM $4,000; DL 100 hrs @ $25; OH applied at $15 per machine hour × 60 MH. Total job cost?", 7400, "4,000 + 2,500 + 900 = $7,400."),
    mc("Why use a predetermined (rather than actual) overhead rate?", ["It's required by the IRS", "Timely job costing and smoothing of seasonal/fixed-cost fluctuations", "It's always more accurate", "To avoid variances"], 1, "Actual OH isn't known until period end."),
    tf("Under absorption costing, fixed manufacturing overhead is a product cost; under variable costing it's a period cost.", true, "GAAP requires absorption costing for external reporting."),
  ]],
]);

unit(T, "t31", "31. Nonmanufacturing Overhead", "SG&A, period costs, and allocating them for pricing and profitability analysis", [
  ["SG&A & Full-Cost Pricing", "Nonmanufacturing costs (selling, general & administrative, R&D, interest) are expensed as incurred under GAAP — but management still needs to allocate them to products/customers for pricing and profitability decisions.", [
    mc("Under GAAP, nonmanufacturing overhead (e.g., corporate office rent) is…", ["Included in inventory", "Expensed in the period incurred", "Capitalized into equipment", "Ignored"], 1, "Period cost."),
    fill("Manufacturing cost per unit $60; SG&A $2,000,000; expected volume 100,000 units; target markup 25% on FULL cost. Selling price?", 100, "Full cost = 60 + 20 = 80; × 1.25 = $100."),
    mc("A company allocates SG&A to products by sales dollars. A drawback?", ["It's illegal", "High-priced products absorb costs regardless of whether they cause them (e.g., a low-price product with many small orders may drive most order-processing cost)", "It's too precise", "It reduces total SG&A"], 1, "Cause-and-effect drivers are better."),
    fill("Customer profitability: Customer A sales $500,000; COGS $350,000; order processing 200 orders × $40; deliveries 100 × $150; returns handling $5,000. Customer margin?", 122000, "150,000 − 8,000 − 15,000 − 5,000 = $122,000."),
    mc("Which SG&A cost is a DIRECT cost of a product line?", ["CEO salary", "Advertising specific to that product line", "Corporate audit fee", "HR department"], 1, "Traceable vs. common fixed costs."),
    mc("For internal decision making, allocating common corporate costs to segments can…", ["Always improve decisions", "Make a profitable segment look unprofitable and lead to dropping it", "Reduce total costs", "Change GAAP income"], 1, "Segment margin should exclude unavoidable common costs."),
    tf("Shipping costs to deliver products to customers (freight-out) are part of cost of goods sold.", false, "Freight-out is a selling expense; freight-in is inventoriable."),
    fill("Company-wide SG&A $2,000,000. Product X uses 30% of sales-force time, 50% of order lines, and 10% of sales dollars. Using order lines as the driver, SG&A assigned to X?", 1000000, "50% × 2,000,000 = $1,000,000 — driver choice swings the answer between 200K and 1M."),
  ]],
]);

unit(T, "t32", "32. Activity Based Costing", "Cost pools, cost drivers, and why traditional costing distorts product costs", [
  ["ABC Mechanics", "Identify activities → assign costs to activity pools → choose a driver for each → compute pool rates → assign to products by driver consumption. Reveals cross-subsidies between high- and low-volume products.", [
    order("Order the ABC steps", ["Identify activities and cost pools", "Assign overhead costs to pools", "Select a cost driver for each pool", "Compute activity rate = pool cost ÷ total driver quantity", "Assign costs to products using each product's driver usage"], "Cause-and-effect replaces a single plantwide rate."),
    fill("Setup pool $240,000; 400 setups. Machining pool $600,000; 40,000 MH. Inspection pool $160,000; 8,000 inspections. Setup rate?", 600, "240,000 ÷ 400 = $600 per setup."),
    fill("Product Lo-Vol: 5,000 units; 100 setups; 5,000 MH; 2,000 inspections. Total ABC overhead assigned?", 175000, "100×600 + 5,000×15 + 2,000×20 = 60,000 + 75,000 + 40,000 = $175,000."),
    fill("ABC overhead per unit for Lo-Vol?", 35, "175,000 ÷ 5,000 = $35/unit."),
    fill("Traditional plantwide rate: total OH $1,000,000 ÷ 40,000 MH = $25/MH. Lo-Vol's traditional overhead per unit (5,000 MH for 5,000 units)?", 25, "5,000 MH × 25 = 125,000 ÷ 5,000 = $25 — traditional UNDER-costs the complex low-volume product by $10/unit."),
    mc("Traditional volume-based costing typically…", ["Over-costs low-volume complex products", "Over-costs high-volume simple products and under-costs low-volume complex ones", "Is always accurate", "Ignores direct labor"], 1, "High-volume products subsidize low-volume ones."),
    match("Match the activity to a sensible cost driver", [["Machine setups", "Number of setups"], ["Purchasing", "Number of purchase orders"], ["Quality inspection", "Inspection hours / number of inspections"], ["Customer service", "Number of service calls"], ["Facility upkeep", "Square footage (facility-level)"]], "Unit-, batch-, product-, and facility-level activities."),
    mc("Which cost is hardest to assign meaningfully under ABC?", ["Setup costs", "Facility-level costs like plant security and property tax", "Inspection", "Purchasing"], 1, "Facility-sustaining costs have no product-level driver; many ABC systems leave them unallocated."),
    tf("ABC can be used for external GAAP reporting.", true, "If the resulting inventory cost is reasonable — but ABC is mostly a management tool."),
  ]],
]);

unit(T, "t33", "33. Standard Costing", "Setting standards, computing and interpreting variances, journal entries", [
  ["Material & Labor Variances", "Price variance = (AP − SP) × AQ. Quantity/efficiency variance = (AQ − SQ) × SP. Favorable when actual < standard. Investigate causes, not just signs.", [
    fill("Standard: 3 lbs @ $4/lb per unit. Actual: 10,000 units produced; 31,000 lbs purchased and used @ $3.80. Materials PRICE variance? (favorable = negative)", -6200, "(3.80 − 4.00) × 31,000 = −$6,200 F."),
    fill("Materials QUANTITY variance? (unfavorable = positive)", 4000, "(31,000 − 30,000) × 4 = $4,000 U."),
    mc("A favorable materials price variance with an unfavorable quantity variance often indicates…", ["Efficient workers", "Purchasing bought cheaper, lower-quality material that caused waste", "Machine breakdown", "Overtime"], 1, "Variances interact — look at the whole picture."),
    fill("Standard labor: 2 hrs @ $18/hr per unit. Actual: 10,000 units; 21,000 hrs @ $18.50. Labor RATE variance? (U positive)", 10500, "(18.50 − 18.00) × 21,000 = $10,500 U."),
    fill("Labor EFFICIENCY variance? (U positive)", 18000, "(21,000 − 20,000) × 18 = $18,000 U."),
    mc("Who is usually responsible for the labor efficiency variance?", ["Purchasing manager", "Production supervisor", "Sales manager", "Controller"], 1, "Though causes may include poor materials or machine issues."),
    je("Record materials purchase: 31,000 lbs at $3.80 actual, $4.00 standard (price variance isolated at purchase).", ["Raw Materials Inventory", "Materials Price Variance", "Accounts Payable", "Work in Process"], ["Raw Materials Inventory"], ["Materials Price Variance", "Accounts Payable"], "Dr RM 124,000 (standard); Cr MPV 6,200 (favorable = credit); Cr A/P 117,800."),
    tf("Favorable variances are always good for the company.", false, "A favorable labor rate variance from using underqualified workers may cause quality problems."),
  ]],
  ["Overhead Variances & Disposition", "Variable OH: spending (AH × (AR − SR)) and efficiency ((AH − SH) × SR). Fixed OH: budget (actual − budgeted) and volume (budgeted − applied). Variances are closed to COGS if immaterial, else prorated.", [
    fill("Variable OH standard $6/DLH; 2 std hrs/unit; 10,000 units; actual 21,000 hrs; actual VOH $122,000. VOH SPENDING variance? (F negative)", -4000, "122,000 − (21,000 × 6 = 126,000) = −$4,000 F."),
    fill("VOH EFFICIENCY variance? (U positive)", 6000, "(21,000 − 20,000) × 6 = $6,000 U."),
    fill("Fixed OH budget $300,000; applied at $15/std hr (denominator 20,000 hrs); actual FOH $304,000; standard hours allowed 20,000. FOH BUDGET (spending) variance?", 4000, "304,000 − 300,000 = $4,000 U."),
    fill("FOH VOLUME variance?", 0, "Budgeted 300,000 − applied (20,000 × 15 = 300,000) = $0 — actual output equaled the denominator level."),
    mc("An unfavorable fixed overhead volume variance means…", ["Costs were too high", "Actual production was below the denominator (planned) level — fixed costs were under-absorbed", "Workers were inefficient", "Prices rose"], 1, "It's a measure of capacity utilization, not spending."),
    mc("At period end, a material net unfavorable variance should be…", ["Closed entirely to COGS", "Prorated among WIP, Finished Goods, and COGS", "Deferred to next year", "Charged to retained earnings"], 1, "Proration restates inventories to approximate actual cost (GAAP)."),
    je("Close a net $8,000 unfavorable variance (immaterial) to COGS.", ["Cost of Goods Sold", "Variance Accounts (net)", "Work in Process", "Finished Goods"], ["Cost of Goods Sold"], ["Variance Accounts (net)"], "Unfavorable variances have debit balances → credit them to close; debit COGS."),
    mc("Management by exception means…", ["Investigating every variance", "Investigating only variances that are significant in size, trend, or controllability", "Ignoring favorable variances", "Changing standards monthly"], 1, "Focus scarce management attention where it matters."),
    tf("Ideal (perfection) standards are better than practical standards for motivating employees.", false, "Practical standards — tight but attainable — motivate better and give meaningful variances."),
  ]],
]);

}
