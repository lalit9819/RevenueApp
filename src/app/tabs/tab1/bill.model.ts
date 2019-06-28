export class Bill {

    date: string;
    visitNo: string;
    mrn: string;
    patientName: string;
    missingNote: string;
    campus: string;
    billerName: string;

  constructor(date: string , visitNo: string, mrn: string, patientName: string, missingNote: string, campus: string, billerName: string) {
    this.date = date;
    this.visitNo = visitNo;
    this.mrn = mrn;
    this.patientName = patientName;
    this.missingNote = missingNote;
    this.campus = campus;
    this.billerName = billerName;
  }
}
