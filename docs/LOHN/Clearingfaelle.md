# SV-Clearing Rückfragen verstehen und Fehler beheben

Die nachfolgende Übersicht basiert auf dem von der Österreichischen Gesundheitskasse (ÖGK) zur Verfügung gestellten Informationsblatt SV-Clearing – Rückfragen verstehen und Fehler beheben (Stand: 28.04.2026) und listet sämtliche Clearing-Codes mit Erklärung und Lösungsmöglichkeiten auf.

## BW1833

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1833 - Bei der @1 ist die Beitragskontonummer @2 für den Beitragszeitraum @3 nicht vorhanden. Das mBGM-Paket wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: ÖGK Landesstelle<br>
      @2: Beitragskontonummer des mBGM-Paketes<br>
      @3: Beitragszeitraum
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es ist ein mBGM-Paket mit einer Beitragskontonummer übermittelt worden, welche in der ausgewählten Landesstelle nicht vorhanden ist.
    </p>

    <p>
      Alternativ könnte es auch sein, dass auf der gemeldeten Beitragskontonummer noch keine laufende Versicherungszeit gemeldet wurde.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die angegebene Beitragskontonummer sowie die ausgewählte Landesstelle sind zu prüfen und gegebenenfalls ist das mBGM-Paket neu zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Fehlende Anmeldungen müssen nachgereicht werden. Falsch übermittelte Anmeldungen müssen berichtigt werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Fälschlicherweise übermittelte mBGM sind zu stornieren.
    </p>

    <p>
      <u>Lösungsmöglichkeit 4:</u><br>
      Der Beginn des Beitragskontos stimmt nicht mit dem Beitragszeitraum der mBGM überein.
    </p>

  </div>
</details>

## BW1834

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1834 - Das übermittelte mBGM-Paket ist für @1 vorgesehen. Sie werden als @2 geführt. Die mBGM müssen mit dem dafür vorgesehenen mBGM-Paket erneut übermittelt werden. Das übermittelte mBGM-Paket wird von der ÖGK storniert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Abrechnungsart der Meldung<br>
      @2: Abrechnungsart des Beitragskontos
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Das mBGM-Paket wurde mit der falschen Satzart (Vorschreiber/Selbstabrechner) übermittelt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Ein neues mBGM-Paket mit der korrekten Satzart ist zu übermitteln.
    </p>

  </div>
</details>

## BW1836

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1836 - Das für den Beitragszeitraum @1 übermittelte mBGM-Paket wird vorgemerkt und wird erst nach dem @2 verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Beitragszeitraum des mBGM-Paketes<br>
      @2: Tag der frühestmöglichen Verarbeitung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Das mBGM-Paket betrifft einen zukünftigen Abrechnungszeitraum.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Das mBGM-Paket wird automatisiert von der ÖGK im entsprechenden Abrechnungszeitraum verbucht.
    </p>

  </div>
</details>

## BW1837

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1837 - Zur @1 ist im @2 kein Versicherter gemeldet. Das mBGM-Paket wurde nicht verbucht.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Beitragskontonummer des mBGM-Paketes<br>
      @2: Beitragszeitraum des mBGM-Paketes
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Auf der gemeldeten Beitragskontonummer sind noch keine laufenden Versicherungszeiten vorhanden.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Fehlende Anmeldungen müssen nachgereicht werden. Falsch übermittelte Anmeldungen müssen berichtigt werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Sollte das betroffene Beitragskonto für einen späteren Beitragszeitraum angefordert worden sein, nehmen Sie bitte mit uns Kontakt auf.
    </p>

  </div>
</details>

## BW1838

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1838 - Die Kombination der Tarifgruppe @4 (@1) mit der Verrechnungsbasis @2 und Verrechnungsposition @3 ist nicht zulässig.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Im Tarifblock wird die Tarifgruppe „Freie Dienstnehmer – Angestellte“ angeführt.<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ <br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“ <br>
      • Verrechnungsbasis „Sonderzahlung“ mit der Verrechnungsposition „Standard-Tarifgruppenverrechnung (Sonderzahlung)“
    </p>

    <p>
      Die Rückfrage wird ausgelöst, da die Verrechnungsbasis „Sonderzahlung“ mit der Verrechnungsposition „Standard-Tarifgruppenverrechnung (Sonderzahlung)“ zur Tarifgruppe „Freie Dienstnehmer – Angestellte“ nicht zulässig ist.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Übermittlung einer Storno-mBGM und eine Neuübermittlung mit korrekten Ergänzungen sind erforderlich.
    </p>

  </div>
</details>

## BW1839

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1839 - Die Verrechnungsposition @1 wurde nicht berücksichtigt, weil sie aufgrund der Höhe des gemeldeten Verrechnungsbasis Betrages € @2 nicht zulässig ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsposition<br>
      @2: Verrechnungsbasis Betrag
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn ein nicht zulässiger Abschlag verwendet wurde.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Tarifgruppe „Angestellter“ <br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ mit einem Betrag von 3.000,00 Euro <br>
      • Verrechnungsposition „Minderung AV auf 1%“
    </p>

    <p>
      Die Rückfrage wird angelegt, da die Verrechnungsposition „Minderung AV auf 1%“ für den betroffenen Dienstnehmer auf Grund der Höhe des Einkommens nicht zulässig ist.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Der Abschlag wurde in der Verrechnung nicht berücksichtigt. Die mBGM wird ohne Abschlag gespeichert und verbucht.
    </p>

    <p>
      Ein Storno und eine Neuübermittlung der mBGM ohne Verrechnungsposition „Minderung AV auf 1%“ sind erforderlich.
    </p>

  </div>
</details>

## BW1840

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1840 - Die Verrechnungsposition @1 wurde nicht berücksichtigt, da das benötigte Alter noch nicht erreicht ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsposition
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn der Dienstnehmer im betroffenen Beitragszeitraum das benötigte Mindestalter für den gemeldeten Abschlag noch nicht erreicht hat.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner für einen auf Grund des Alters nicht anspruchsberechtigten Dienstnehmer mit folgenden Angaben:<br>
      • Tarifgruppe „Angestellter“ <br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ <br>
      • Verrechnungsposition „AV+IE Entfall Pensionsanspruch“
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Der Abschlag wurde in der Verrechnung nicht berücksichtigt. Die mBGM wird ohne Abschlag gespeichert und verbucht.
    </p>

    <p>
      Ein Storno und eine Neuübermittlung der mBGM ohne Verrechnungsposition „AV+IE Entfall Pensionsanspruch“ sind erforderlich.
    </p>

  </div>
</details>

## BW1841

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1841 - Die Verrechnungsposition @1 wurde nicht berücksichtigt, da diese nicht im gültigen Zeitraum (@2 bis @3) der vorliegenden Neugründerförderungsinformation liegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsposition<br>
      @2: Beginn des Zeitraumes der Neugründungsförderung<br>
      @3: Ende des Zeitraumes der Neugründungsförderung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn der Abschlag zur Neugründerförderung nicht für einen Zeitraum der Neugründerförderungsinformation gemeldet wurde.
    </p>

    <p>
      Alternativ wurde das Neugründungsförderungsformular nicht oder nach Übermittlung des mBGM-Paketes an die ÖGK übermittelt.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Für den Dienstgeber ist bis 03/2026 eine Neugründerförderungsinformation gespeichert.<br>
      Für 04/2026 wurde eine mBGM Selbstabrechner mit folgenden Angaben übermittelt:<br>
      • Tarifgruppe „Arbeiter“ <br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ <br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“ <br>
      • Verrechnungsposition „WF-Entfall Neugründerförderung“
    </p>

    <p>
      Der Abschlag „WF-Entfall Neugründerförderung“ 04/2026 ist nicht mehr zulässig.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Der Abschlag wurde in der Verrechnung nicht berücksichtigt. Die mBGM wird ohne Abschlag gespeichert und verbucht.
    </p>

    <p>
      Ein Storno und eine Neuübermittlung der mBGM ohne Verrechnungsposition „WF-Entfall Neugründerförderung“ sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Das Neugründungsförderungsformular ist der ÖGK zu übermitteln.
    </p>

    <p>
      Ein Storno und eine Neuübermittlung der mBGM sind erforderlich.
    </p>

  </div>
</details>

## BW1842

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1842 - Der Abschlag @1 wäre für die gemeldete Verrechnungsbasis @3 in Höhe € @4 möglich - Tarifblock mit der Tarifgruppe: @2
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Art des Abschlages, zum Beispiel: „Minderung AV auf 1%“<br>
      @2: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      @3: Verrechnungsbasis Bezeichnung<br>
      @4: Höhe Verrechnungsbasis Betrag
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn auf Grund der Höhe der gemeldeten Beitragsgrundlage ein Abschlag zur Verrechnung zulässig wäre, welcher vom Dienstgeber nicht gemeldet wurde.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Tarifgruppe „Arbeiter“ <br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ <br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“ <br>
      • Verrechnungsposition „Minderung AV auf 1%“
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Rückfrage dient als Hinweis.
    </p>

    <p>
      Um den Abschlag zur Geltung zu bringen, sind ein Storno und eine Neuübermittlung der mBGM mit korrekter AV-Minderung zu übermitteln.
    </p>

  </div>
</details>

## BW1843

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1843 - Der Abschlag @1 wäre aufgrund des Alters zulässig - Tarifblock mit der Tarifgruppe: @2, Verrechnungsbasis: @3
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Art des Abschlages, zum Beispiel: „UV-Entfall 60. LJ vollendet“<br>
      @2: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      @3: Verrechnungsbasis Bezeichnung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Übermittlung einer mBGM Selbstabrechner für einen auf Grund des Alters anspruchsberechtigten Dienstnehmer mit folgenden Angaben:<br>
      • Tarifgruppe „Angestellter“<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“<br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“
    </p>

    <p>
      Die Rückfrage wurde angelegt, da der Dienstgeber gültige Abschläge („AV+IE Entfall Pensionsanspruch“ und „UV-Entfall 60. LJ vollendet“) trotz Zulässigkeit nicht gemeldet hat.
    </p>

    <p>
      Ab diesem Alter wäre der Abschlag für UV auch möglich.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Rückfrage dient als Hinweis.
    </p>

    <p>
      Um den Abschlag zur Geltung zu bringen, sind ein Storno und eine Neuübermittlung der mBGM mit korrekten Abschlägen zu übermitteln.
    </p>

  </div>
</details>

## BW1846

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1846 - Die @1 wurde nicht verarbeitet, da die/der Versicherte bereits verstorben ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Für einen bereits verstorbenen Dienstnehmer wurde eine Meldung über das Todesdatum hinaus übermittelt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Prüfung des Todesdatums ist durchzuführen.
    </p>

    <p>
      Ein Storno der mBGM und eine Neuübermittlung mit korrektem Datum (spätestens bis zum Todesdatum) sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der mBGM ist zu übermitteln, sofern die mBGM fälschlicherweise übermittelt wurde.
    </p>

  </div>
</details>

## BW1847

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1847 - Die @1 wurde nicht verarbeitet, da für den selben Beitragszeitraum bereits eine @1 mit dem Referenzwert @2 gespeichert ist. Eine Stornomeldung ist erforderlich.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Satzart der mBGM<br>
      @2: Referenzwert der mBGM, für die eine Stornomeldung erforderlich ist
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es ist bereits eine mBGM mit identer Satzart vorhanden.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Für die zu stornierende mBGM ist eine Stornomeldung zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Sollte es sich um zwei oder mehrere Beschäftigungen innerhalb eines Beitragszeitraumes mit der gleichen Beschäftigungsfolge handeln, ist nur eine mBGM mit mehreren Tarifblöcken erforderlich. Alle mBGM sind zu stornieren und mit einer mBGM mit mehreren Tarifblöcken zu melden.
    </p>

  </div>
</details>

## BW1850

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1850 - Die Summe der Beiträge € @1 der mBGM ist nicht ident mit der von uns errechneten Summe € @2.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Summe der Beiträge mBGM<br>
      @2: Summe der Beiträge mBGM errechnet
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn die errechnete Summe der Beiträge der mBGM nicht ident ist mit der vom Dienstgeber übermittelten Summe der Beiträge.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben: <br>
      • Tarifgruppe „Angestellter“<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“<br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“
    </p>

    <p>
      Die Summe der Beiträge in der mBGM beträgt 543,21 Euro.<br>
      Die vom System berechnete Summe der Beiträge beträgt 545,21 Euro.<br>
      Es kommt zu einer Differenz zwischen den gemeldeten Beiträgen des Dienstgebers und der vom System berechneten Summe der Beiträge in der Höhe von 2,00 Euro.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Ein Storno und eine Neuübermittlung der mBGM mit gegebenenfalls korrekten Angaben können erforderlich sein, damit die von Ihnen gemeldete Summe mit der Verbuchung der ÖGK übereinstimmt.
    </p>

  </div>
</details>

## BW1855

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1855 - Die Verrechnungsposition @2 zur Verrechnungsbasis @1 wurde trotz Mehrfachmeldung nur einmal berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis<br>
      @2: Verrechnungsposition
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn zu einer Verrechnungsbasis mehrfach die gleiche Verrechnungsposition gemeldet worden ist.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Tarifgruppe „Angestellter“<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“<br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“ wird zweimal angeführt
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Rückfrage dient als Hinweis.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM sind erforderlich.
    </p>

  </div>
</details>

## BW1856

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1856 - Die zum Tarifblock mit der Tarifgruppe @1 (@2) gemeldete Verrechnungsposition @3 zur Verrechnungsbasis @4 ist nicht zulässig und wird nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Bezeichnung<br>
      @2:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      @3: Verrechnungsposition<br>
      @4: Verrechnungsbasis
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn zur gemeldeten Verrechnungsbasis die falsche Verrechnungsposition ausgewählt wurde. Die angegebene Verrechnungsposition muss mit einer eigenen oder bei der richtigen Verrechnungsbasis angeführt werden.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ in der Höhe von 1.500,00 Euro<br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“ <br>
      • Verrechnungsbasis „Beitragsgrundlage zur BV“ in der Höhe von 1.500,00 Euro <br>
      • Verrechnungsposition „Betriebliche Vorsorge“ <br>
      • Verrechnungsposition „Minderung AV auf 1%“
    </p>

    <p>
      Die Rückfrage wird ausgelöst, da die Verrechnungsposition „Minderung AV auf 1%“ zur Verrechnungsbasis „Beitragsgrundlage zur BV“ nicht zulässig ist.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Verrechnungsposition „Minderung AV auf 1%“ ist nur bei den Verrechnungsbasen „Allgemeine Beitragsgrundlage“ bzw. „Sonderzahlung“ möglich.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM sind erforderlich.
    </p>

  </div>
</details>

## BW1857

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1857 - Die Verrechnungsbasis @1 wurde mehrfach gemeldet und nur in der Höhe von € @2 berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis<br>
      @2: Verrechnungsbasis Betrag
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn zu einem Tarifblock mehrfach die gleiche Verrechnungsbasis gemeldet worden ist.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Tarifgruppe „Angestellter“ <br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ wurde zweimal gemeldet
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Sollte die „Allgemeine Beitragsgrundlage“ unterschiedlich hoch sein, sind eine Storno-mBGM und eine Neuübermittlung der mBGM mit korrekter Grundlage erforderlich.
    </p>

  </div>
</details>

## BW1858

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1858 - Der BV-Zuschlag bei jährlicher Abrechnung wurde automatisch ergänzt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Im mBGM-Paket wird „Jährliche Abrechnung geringfügig Beschäftigter“ angegeben, jedoch wird in der mBGM kein BV-Zuschlag verrechnet.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM sind erforderlich, damit die Angabe der übermittelten Summe mit der von der ÖGK verrechneten Summe übereinstimmt.
    </p>

  </div>
</details>

## BW1859

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1859 - Die Verrechnungsbasis @1 darf nur gemeldet werden, wenn sie niedriger als die Verrechnungsbasis @2 ist. Die mBGM wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis für spezielle AV-Minderung<br>
      @2: Verrechnungsbasis („Allgemeine Beitragsgrundlage“ und/oder „Sonderzahlung“)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn die Verrechnungsbasis für spezielle AV-Minderung höher oder gleich der Verrechnungsbasis („Allgemeine Beitragsgrundlage“ und/oder „Sonderzahlung“) ist.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit korrekter Verrechnungsbasis für spezielle AV-Minderung sind erforderlich.
    </p>

  </div>
</details>

## BW1861

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1861 - Die mBGM wurde nicht verarbeitet, da für den Zeitraum @1: @2 keine Versicherungszeit BV gespeichert ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Datum (Beitragszeitraum Von-Datum)<br>
      @2: Datum (Beitragszeitraum Bis-Datum)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die mBGM wurde nicht verarbeitet, da keine entsprechende Zeit zur Betrieblichen Vorsorge für den Beitragszeitraum gespeichert ist.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Richtigstellung der Anmeldung mit Betrieblicher Vorsorge ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno-mBGM und eine Neuübermittelung der mBGM ohne Angabe der Betrieblichen Vorsorge sind erforderlich.
    </p>

  </div>
</details>

## BW1862

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1862 - Die mBGM wurde nicht verarbeitet, da für den Zeitraum @1: @2 keine Versicherungszeit SV gespeichert ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Datum (Beitragszeitraum Von-Datum)<br>
      @2: Datum (Beitragszeitraum Bis-Datum)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die mBGM wurde nicht verarbeitet, da keine entsprechende Zeit zur Sozialversicherung für den Beitragszeitraum gespeichert ist. Dies kann beispielsweise eine Urlaubsersatzleistung betreffen, die zwar in der mBGM, allerdings nicht mit der Abmeldung gemeldet wurde.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln. Eine Anmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Ein Storno der Abmeldung, wenn das Beschäftigungsverhältnis doch aufrecht bleibt, oder eine Richtigstellung der Abmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Die Versicherungszeit ist zu überprüfen. Sofern keine Versicherungszeit vorhanden ist, ist ein Storno der mBGM zu übermitteln.
    </p>

  </div>
</details>

## BW1863

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1863 - Die mBGM wurde nicht verarbeitet, da für den Zeitraum @1: @2 keine @3 gespeichert ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Datum (Beitragszeitraum Von-Datum)<br>
      @2: Datum (Beitragszeitraum Bis-Datum)<br>
      @3: Beschäftigungfolgetyp
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die mBGM wurde nicht verarbeitet, da keine entsprechende Zeit zur Sozialversicherung für den Beitragszeitraum gespeichert ist.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln. Eine Anmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Ein Storno der Abmeldung, wenn das Beschäftigungsverhältnis doch aufrecht bleibt, oder eine Richtigstellung der Abmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Die Versicherungszeit ist zu überprüfen. Sofern keine Versicherungszeit vorhanden ist, ist ein Storno der mBGM zu übermitteln.
    </p>

  </div>
</details>

## BW1869

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1869 - Die Meldung von mehr als einer Tarifgruppe mit Beginn der Verrechnung = @1 ist für diese MBGM nicht zulässig.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Beginn der Verrechnung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      In der mBGM wurden zwei oder mehr Tarifblöcke gemeldet, jedoch ist nur ein Dienstverhältnis gespeichert.
    </p>

    <p>
      Es ist zu prüfen, ob die mBGM falsch ist oder eine weitere Meldung fehlt, welche mehrere Versicherungszeiten pro Kalendermonat begründen würde.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln. Eine Anmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Ein Storno der Abmeldung, wenn das Beschäftigungsverhältnis doch aufrecht bleibt, oder eine Richtigstellung der Abmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit einem Tarifblock sind zu übermitteln.
    </p>

  </div>
</details>

## BW1870

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1870 - Für den Tarifblock mit der Tarifgruppe @1 und der Verrechnungsbasis @2 ist keine entsprechende Versicherungszeit SV vorhanden. Die Grundlage für die/den Versicherte/n wurde nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      @2: Verrechnungsbasis Bezeichnung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die mBGM wurde nicht verarbeitet, da keine entsprechende Zeit zur Sozialversicherung für den Beitragszeitraum gespeichert ist.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln. Eine Anmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln. Ein Storno der Abmeldung, wenn das Beschäftigungsverhältnis doch aufrecht bleibt, oder eine Richtigstellung der Abmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Die Versicherungszeit ist zu überprüfen. Sofern keine Versicherungszeit vorhanden ist, ist ein Storno der mBGM zu übermitteln.
    </p>

  </div>
</details>

## BW1871

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1871 - Für den Tarifblock mit der Tarifgruppe @1 und der Verrechnungsbasis @2 ist keine entsprechende Versicherungszeit BV vorhanden. Die Grundlage für die/den Versicherte/n wurde nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      @2: Verrechnungsbasis Bezeichnung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die mBGM wurde nicht verarbeitet, da keine entsprechende Zeit zur Betrieblichen Vorsorge für den Beitragszeitraum gespeichert ist. Eventuell wurde bei der Anmeldung der beitragsfreie Monat berücksichtigt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Richtigstellung der Anmeldung mit Betrieblicher Vorsorge ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno-mBGM und eine Neuübermittelung der mBGM ohne Angabe der Betrieblichen Vorsorge sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Bei fallweiser Beschäftigung: Eine Storno-mBGM und eine Neuübermittelung der mBGM mit Angabe der Betrieblichen Vorsorge im korrekten Tarifblock sind erforderlich.
    </p>

  </div>
</details>

## BW1874

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1874 - Für die Beschäftigung von @1: @2 wurde im Beitragszeitraum @3 für den Bereich @4 keine entsprechende Beitragsgrundlage gemeldet
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: BeschäftigungVon<br>
      @2: BeschäftigungBis<br>
      @3: Beitragszeitraum<br>
      @4: Versicherungsbereich
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Trotz Vorliegens einer Zeit in der Sozialversicherung oder Betrieblichen Vorsorge wurde keine mBGM übermittelt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine Anmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine fehlende Abmeldung zur Karenz ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Wurde bei Vorliegen einer Arbeitsunfähigkeit die entsprechende Arbeits- und Entgeltbestätigung nicht übermittelt, ist dies nachzuholen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 4:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine fehlende Grundlage ist mittels mBGM zu übermitteln.
    </p>

  </div>
</details>

## BW1875

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1875 - Die gemeldete Verrechnungsbasis-@1 in Höhe von € @2 für den Tarifblock mit der Tarifgruppe @3 übersteigt die Geringfügigkeitsgrenze. Die Grundlage für die/den Versicherte/n wurde nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Bezeichnung, zum Beispiel: „Allgemeine Beitragsgrundlage“ + „Beitragsgrundlage bei unbezahltem Urlaub“<br>
      @2: Betrag bzw. Summe Beitragsgrundlage<br>
      @3: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die in der mBGM gemeldete Beitragsgrundlage übersteigt die Geringfügigkeitsgrenze.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Bei tatsächlicher Überschreitung der Geringfügigkeitsgrenze ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Tarifgruppe erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Bei Angabe einer falschen Beitragsgrundlage in der mBGM ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Beitragsgrundlage erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen.
    </p>

    <p>
      Bei Vorliegen einer fehlerhaften Versicherungszeit ist eine Richtigstellung der Anmeldung/Richtigstellung der Abmeldung zu übermitteln.
    </p>

  </div>
</details>

## BW1876

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1876 - Die gemeldete Verrechnungsbasis-@1 in Höhe von € @2 für den Tarifblock mit der Tarifgruppe @3 liegt unter der Geringfügigkeitsgrenze.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Bezeichnung, zum Beispiel: „Allgemeine Beitragsgrundlage“<br>
      @2: Betrag bzw. Summe<br>
      @3: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die in der mBGM gemeldete Beitragsgrundlage liegt unter der Geringfügigkeitsgrenze.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Liegt die gemeldete Beitragsgrundlage tatsächlich unter der Geringfügigkeitsgrenze, ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Tarifgruppe erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Bei Angabe einer falschen Beitragsgrundlage in der mBGM ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Beitragsgrundlage erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen.
    </p>

    <p>
      Bei Vorliegen einer fehlerhaften Versicherungszeit ist eine Richtigstellung der Anmeldung/Richtigstellung der Abmeldung zu übermitteln.
    </p>

  </div>
</details>

## BW1877

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1877 - Die gemeldete Verrechnungsbasis-@1 in Höhe von € @2 für den Tarifblock mit der Tarifgruppe @3 übersteigt die Höchstbeitragsgrundlage. Die Grundlage für die/den Versicherte/n wurde nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Bezeichnung, zum Beispiel: „Allgemeine Beitragsgrundlage“<br>
      @2: Betrag bzw. Summe<br>
      @3: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn die gemeldete Beitragsgrundlage bzw. die Summe der gemeldeten Beitragsgrundlagen („Allgemeine Beitragsgrundlage“ + „Beitragsgrundlage bei unbezahltem Urlaub“) über der Höchstbeitragsgrundlage liegt.
    </p>

    <p>
      <strong>Beispiel 1:</strong><br>
      Für den Dienstnehmer ist beim Dienstgeber eine Versicherungszeit vom 01.01.2026 bis 15.01.2026 als „Angestellter“ vorhanden.<br>
      Übermittlung einer mBGM für den Beitragszeitraum 01/2026 mit folgenden Angaben:<br>
      • Tarifgruppe „Angestellter“ <br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ von 3.600,00 Euro
    </p>

    <p>
      231,00 Euro (tägliche Höchstbeitragsgrundlage für 2026) x 15 (Verrechnungstage) = 3.465,00 Euro
    </p>

    <p>
      Es wird die Rückfrage angelegt, da die gemeldete Beitragsgrundlage von 3.600,00 Euro den errechneten Höchstbeitragsgrundlage Betrag von 3.465,00 Euro übersteigt.
    </p>

    <p>
      <strong>Beispiel 2:</strong><br>
      Für den Dienstnehmer ist beim Dienstgeber eine Versicherungszeit vom 01.01.2026 bis 16.01.2026 als „Angestellter“ vorhanden.<br>
      Der Dienstgeber übermittelt für den Dienstnehmer eine mBGM für den Beitragszeitraum Jänner 2026 mit folgenden Angaben:<br>
      • Tarifgruppe „Angestellter“ <br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ von 3.000,00 Euro<br>
      • Beitragsgrundlage „unbezahlter Urlaub“ von 1.000,00 Euro
    </p>

    <p>
      231,00 Euro (tägliche Höchstbeitragsgrundlage für 2026) x 16 (Verrechnungstage) = 3.696,00 Euro
    </p>

    <p>
      Es wird die Rückfrage angelegt, da die Summe der Beitragsgrundlage „unbezahlter Urlaub“ inklusive „Allgemeiner Beitragsgrundlage“ von 4.000,00 Euro die errechnete Höchstbeitragsgrundlage von 3.696,00 Euro übersteigt.
    </p>

    <p>
      <strong>Beispiel 3:</strong><br>
      Für den Dienstnehmer ist beim Dienstgeber eine Versicherungszeit vom 01.01.2026 bis 14.01.2026 als „Angestellter“ vorhanden.<br>
      Der Dienstgeber übermittelt für den Dienstnehmer eine mBGM für den Beitragszeitraum Jänner 2026 mit folgenden Angaben:<br>
      • Tarifgruppe „Angestellter“ <br>
      • Beitragsgrundlage bei „unbezahltem Urlaub“ von 3.300,00 Euro
    </p>

    <p>
      231,00 Euro (tägliche Höchstbeitragsgrundlage für 2026) x 14 (Verrechnungstage) = 3.234,00 Euro
    </p>

    <p>
      Es wird die Rückfrage angelegt, da die Beitragsgrundlage bei „unbezahltem Urlaub“ von 3.300,00 Euro höher ist als die errechnete Höchstbeitragsgrundlage von 3.234,00 Euro.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen. Liegt die gemeldete Beitragsgrundlage tatsächlich über der Höchstbeitragsgrundlage, ist die mBGM zu stornieren und eine Neuübermittlung mit einer Beitragsgrundlage bis maximal zur Höchstbeitragsgrundlage erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen. Bei Angabe einer falschen Beitragsgrundlage in der mBGM ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Beitragsgrundlage erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen. Bei Vorliegen einer fehlerhaften Versicherungszeit ist eine Richtigstellung der Anmeldung/Richtigstellung der Abmeldung oder ein Storno der Abmeldung zu übermitteln.
    </p>

  </div>
</details>

## BW1878

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1878 - Die Summe der gemeldeten Sonderzahlungen € @1 übersteigt in der Jahresbetrachtung die HBG für Sonderzahlungen von € @2. Die Grundlage für die/den Versicherte/n wurde nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Summe Grundlage-SZ im Jahr<br>
      @2: HBG-Sonderzahlung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn die gemeldete monatliche Beitragsgrundlage „Sonderzahlung“ inklusive der bis dahin im Beitragsjahr übermittelten Sonderzahlungen die Höchstbeitragsgrundlage für die Sonderzahlung übersteigt.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Für den Dienstnehmer wurden vom Dienstgeber im Beitragsjahr 2026 bereits Sonderzahlungen in der Höhe von 11.000,00 Euro übermittelt.<br>
      Übermittlung einer mBGM für den Beitragszeitraum 3/2026 mit folgenden Angaben:<br>
      • Tarifgruppe „Angestellter“ <br>
      • Beitragsgrundlage „Sonderzahlung“ von 3.700,00 Euro
    </p>

    <p>
      11.000,00 Euro + 3.700,00 Euro (aus aktueller Beitragsgrundlagemeldung) = 14.700,00 Euro
    </p>

    <p>
      Die Rückfrage wird angelegt, da die Summe der Beitragsgrundlagen in der Jahresbetrachtung 14.700,00 Euro höher ist als die Höchstbeitragsgrundlage für Sonderzahlungen von 13.860,00 Euro (Wert 2026).
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Liegt die gemeldete Sonderzahlung tatsächlich über der jährlichen Höchstbeitragsgrundlage, ist die mBGM zu stornieren und eine Neuübermittlung mit einer Sonderzahlung bis maximal zur jährlichen Höchstbeitragsgrundlage erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Bei Angabe einer falschen Sonderzahlung in der mBGM ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Sonderzahlung erforderlich.
    </p>

  </div>
</details>

## BW1879

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1879 - Das gemeldete Verrechnungsgrundlage-Kennzeichen @1 (@3) stimmt mit dem ermittelten Kennzeichen @2 (@4) nicht überein.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: gemeldetes Verrechnungsgrundlage-KZ<br>
      @2: ermitteltes Verrechnungsgrundlage-KZ<br>
      @3: gemeldete Verrechnungsgrundlage Text<br>
      @4: ermittelte Verrechnungsgrundlage Text
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      In der mBGM wurde die Verrechnungsgrundlage „SV-Verrechnung mit Zeit in der SV“ angegeben.
    </p>

    <p>
      Es liegt jedoch eine Zeit in der Sozialversicherung und Betrieblichen Vorsorge vor.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittelung der mBGM mit Angabe der korrekten Verrechnungsgrundlage sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Die Anmeldung ist mit einer Richtigstellung der Anmeldung zu berichtigen, sofern die Zeit zur Betrieblichen Vorsorge nicht korrekt ist.
    </p>

  </div>
</details>

## BW1881

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1881 - Die Verrechnungsbasis @1 € @2 für den Tarifblock mit der Tarifgruppe @3 liegt unter dem Betrag von @4 € @5.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Bezeichnung, zum Beispiel: „Beitragsgrundlage DAG fallweise / kürzer als ein Monat vereinbarte geringfügige Beschäftigung“<br>
      @2: Betrag<br>
      @3: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      @4: Bezeichnungen Summierte Verrechnungsbasen, zum Beispiel: „Allgemeine Beitragsgrundlage“ + „Sonderzahlung“<br>
      @5: Betrag/Summe der Grundlagen
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die gemeldete Beitragsgrundlage für die Verrechnungsbasis „Beitragsgrundlage DAG fallweise / kürzer als ein Monat vereinbarte geringfügige Beschäftigung“ liegt unter der Summe aus der Beitragsgrundlage „Allgemeine Beitragsgrundlage“ und der Beitragsgrundlage „Sonderzahlung“.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Höhe der Verrechnungsbasis „Beitragsgrundlage DAG fallweise / kürzer als ein Monat vereinbarte geringfügige Beschäftigung“ ist zu überprüfen.
    </p>

    <p>
      Die Höhe der Dienstgeberabgabe (DAG) hat der Summe der „Allgemeinen Beitragsgrundlage“ inklusive einer eventuellen Sonderzahlung zu entsprechen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittelung der mBGM mit Angabe der DAG in Höhe der „Allgemeinen Beitragsgrundlage“ und der Beitragsgrundlage „Sonderzahlung“ sind erforderlich.
    </p>

  </div>
</details>

## BW1882

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1882 - Für den Tarifblock mit der Tarifgruppe @1 und der Verrechnungsbasis @2 ist keine entsprechende Versicherungszeit SV vorhanden.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      @2: Verrechnungsbasis Bezeichnung, zum Beispiel: „Beitragsgrundlage DAG fallweise / kürzer als ein Monat vereinbarte geringfügige Beschäftigung“
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die mBGM wurde nicht verarbeitet, da keine entsprechende Zeit in der Sozialversicherung für den Beitragszeitraum gespeichert ist.
    </p>

    <p>
      Beispiel: Eine mBGM mit Beginn der Verrechnung „01“ und Tarifgruppe „Angestellter“ wurde für 05/2026 übermittelt. Es liegt jedoch keine Versicherungszeit per 01.05.2026 vor, da die Versicherungszeit mit 30.04.2026 beendet wurde.
    </p>

    <p>
      Beispiel: Der Beginn oder das Ende der Verrechnung auf der mBGM stimmt nicht mit den gemeldeten Versicherungszeiten überein.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen und die entsprechenden Meldungen sind zu übermitteln. Eine neuerliche Anmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen und die entsprechenden Meldungen sind zu übermitteln. Ein Storno der Abmeldung, wenn das Beschäftigungsverhältnis doch aufrecht bleibt, oder eine Richtigstellung der Abmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen. Sofern die Versicherungszeit korrekt ist, sind ein Storno der mBGM und eine neuerliche mBGM mit korrigierten Angaben zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 4:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen. Sofern keine Versicherungszeit vorhanden ist, ist ein Storno der mBGM zu übermitteln.
    </p>

  </div>
</details>

## BW1893

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1893 - Zum Tarifblock mit der Tarifgruppe @1 (@2) wurde die Verrechnungsbasis @3 ohne die Verrechnungsbasis @4 gemeldet. Die mBGM wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Bezeichnung<br>
      @2:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      @3: Verrechnungsbasis<br>
      @4: Verrechnungsbasis
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Einige Verrechnungsbasis-Typen sind nur möglich, wenn gleichzeitig auch andere Verrechnungsbasis-Typen in einer mBGM enthalten sind. Wenn Verrechnungsbasen vorliegen, die für sich alleine nicht möglich sind, wird die mBGM nicht weiterverarbeitet.
    </p>

    <p>
      Diese Prüfung betrifft die folgenden Verrechnungsbasis-Typen: <br>
      • „Allgemeine Beitragsgrundlage für spezielle AV-Minderung“ (AZ) ist nur zulässig mit „Allgemeine Beitragsgrundlage“ (AB)<br>
      • „Allgemeine Beitragsgrundlage für PV-Reduktion“ (RP) ist nur zulässig mit „Allgemeine Beitragsgrundlage“ (AB)<br>
      • „Sonderzahlung für spezielle AV-Minderung“ (SO) ist nur zulässig mit „Sonderzahlung“ (SZ) <br>
      • „Beitrag zur BV“ (BB) ist nur zulässig mit „Beitragsgrundlage zur BV“ (BV)<br>
      • „Beitragsgrundlage DAG fallweise / kürzer als ein Monat vereinbarte geringfügige Beschäftigung“ (SO) ist nur zulässig mit „Allgemeine Beitragsgrundlage“ (AB) oder „Sonderzahlung“ (SZ)<br>
      • „Differenzbeitragsgrundlage SW-Entschädigungs-Reduktion“ (SR) ist nur zulässig mit „Allgemeine Beitragsgrundlage“ (AB) oder „Sonderzahlung“ (SZ)
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Verrechnungsbasen sind zu überprüfen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten im Zusammenhang stehenden Verrechnungsbasen sind erforderlich.
    </p>

  </div>
</details>

## BW1894

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1894 - Die Tarifgruppe @1 (@2) ist ungültig. Die mBGM wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Bezeichnung<br>
      @2:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      In der mBGM wurde nur das Service-Entgelt abgerechnet.
    </p>

    <p>
      Die Abrechnung des Service-Entgeltes erfordert die Angabe der „Allgemeinen Beitragsgrundlage“.
    </p>

    <p>
      Daher wurde die Rückfrage angelegt und die mBGM nicht verbucht.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der „Allgemeinen Beitragsgrundlage“ und des Service-Entgeltes sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Übermittlung einer Storno-mBGM, sofern das Service-Entgelt fälschlicherweise abgerechnet wurde.
    </p>

  </div>
</details>

## BW1895

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1895 - Die zum Tarifblock mit der Tarifgruppe @1 (@2) gemeldete Verrechnungsbasis @3 ist ungültig und wurde nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Bezeichnung<br>
      @2:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      @3: Verrechnungsbasis
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird ausgelöst, wenn zu einer Tarifgruppe eine nicht gültige Verrechnungsbasis gemeldet wird.
    </p>

    <p>
      Die Verrechnungsbasis und alle zugehörigen Verrechnungspositionen werden gestrichen, somit nicht für die Verbuchung berücksichtigt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Es ist eine Überprüfung der Tarifgruppe bzw. der Verrechnungsbasis notwendig.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Verrechnungsbasis inklusive Verrechnungsposition sind erforderlich.
    </p>

  </div>
</details>

## BW1896

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1896 - Die Verrechnungsposition @1 ist ungültig und wurde nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsposition
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn zu einem Tarifblock und einer Verrechnungsbasis eine nicht gültige Verrechnungsposition gemeldet wird.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“<br>
      • Verrechnungsposition „XY“
    </p>

    <p>
      Diese Verrechnungsposition ist nicht gültig.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die vom Dienstgeber gemeldete Verrechnungsposition ist unbekannt.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Verrechnungsposition sind erforderlich.
    </p>

  </div>
</details>

## BW1899

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1899 - Die Verrechnungsposition @2 zum Tarifblock mit der Tarifgruppe @3 (@4) zur Verrechnungsbasis @1 fehlt. Die mBGM wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis<br>
      @2: Verrechnungsposition<br>
      @3: Tarifgruppe Bezeichnung<br>
      @4:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn zu einer Verrechnungsbasis eine als zwingend zu meldende Verrechnungsposition nicht gemeldet wurde.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      1. Übermittlung einer mBGM mit folgenden Angaben:<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“<br>
      • Verrechnungsposition „Minderung AV auf 2%“
    </p>

    <p>
      2. Übermittlung einer mBGM mit folgenden Angaben:<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“<br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung (Sonderzahlung)“
    </p>

    <p>
      Die zwingend erforderliche Verrechnungsposition „Standard-Tarifgruppenverrechnung“ fehlt. Die Verrechnungsposition „Standard-Tarifgruppenverrechnung (Sonderzahlung)“ ist nur bei Angabe der Verrechnungsbasis „Sonderzahlung“ (SZ) zulässig.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Verrechnungsposition sind erforderlich.
    </p>

  </div>
</details>

## BW1900

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1900 - Die Verrechnungsbasis @1 ist zum Tarifblock mit der Tarifgruppe @2 (@3) nicht zulässig und wurde nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis<br>
      @2: Tarifgruppe Bezeichnung<br>
      @3:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn zu einer bestimmten Tarifgruppe keine Verrechnungsbasis „Beitragsgrundlage zur BV“ (BV) abgerechnet werden darf.
    </p>

    <p>
      Je Tarifgruppe ist definiert, ob die Verrechnung einer Betrieblichen Vorsorge zulässig ist oder nicht. Wenn eine Verrechnungsbasis und eine Verrechnungsposition für die Betriebliche Vorsorge übermittelt werden, aber die Betriebliche Vorsorge für die Tarifgruppe nicht zulässig ist, wird diese Verrechnungsbasis mit allen zugehörigen Verrechnungspositionen gestrichen.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Überprüfung der Tarifgruppe ist durchzuführen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM ohne Angabe der Verrechnungsbasis „Beitragsgrundlage zur BV“ (BV) sind erforderlich.
    </p>

  </div>
</details>

## BW1901

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1901 - Die Verrechnungsposition @2 zum Tarifblock mit der Tarifgruppe @3 mit der Verrechnungsbasis @4 wurde der Verrechnungsposition @1 mit der Verrechnungsbasis @5 nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsposition<br>
      @2: Verrechnungsposition (nicht zulässig)<br>
      @3: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      @4: Verrechnungsbasis (nicht zulässig)<br>
      @5: Verrechnungsbasis
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Tarifgruppe „Angestellter“<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ in der Höhe von 1.000,00 Euro<br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“<br>
      • Verrechnungsposition „Minderung AV auf 2%“ <br>
      • Verrechnungsposition „AV+IE Entfall Pensionsanspruch“
    </p>

    <p>
      Die Rückfrage wird angelegt, da die Verrechnungsposition „Minderung AV auf 2%“ auf Grund der Verrechnungsposition „AV+IE Entfall Pensionsanspruch“ nicht für weitere Verarbeitung zu berücksichtigen ist.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Verrechnungsposition sind erforderlich.
    </p>

  </div>
</details>

## BW1902

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1902 - Die Verrechnungsbasis @1 ist im Zeitraum von @2 bis @3 nicht gültig und wurde nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis<br>
      @2: Zeitraum-Von Datum<br>
      @3: Zeitraum-Bis Datum
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es erfolgt eine Überprüfung auf Gültigkeit zu einer Verrechnungsbasis.
    </p>

    <p>
      Der Rückfrage wird angelegt, wenn eine Verrechnungsbasis zu einer Tarifgruppe in dem gemeldeten Beitragszeitraum noch nicht oder nicht mehr zulässig ist (zum Beispiel auf Grund gesetzlicher Änderungen).
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Der Beitragszeitraum oder die Tarifgruppe ist zu überprüfen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

  </div>
</details>

## BW1916

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1916 - Auf Grund des Fehlens einer monatlichen Beitragsgrundlagenmeldung für den Beitragszeitraum @1 wurde eine mBGM für den Bereich SV von Amts wegen erstellt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Beitragszeitraum
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es wurde keine mBGM für den betroffenen Beitragszeitraum und den betroffenen Dienstnehmer übermittelt. Die Versicherungszeit ist im DG-Dashboard zu überprüfen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine mBGM für den betroffenen Beitragszeitraum und den betroffenen Dienstnehmer ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine fehlende Arbeits- und Entgeltbestätigung ist zu übermitteln, sofern der Dienstnehmer Leistungsbezüge der ÖGK beziehen sollte, weshalb keine mBGM übermittelt wurde.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Eine Storno Anmeldung oder eine fehlende Abmeldung ist zu übermitteln, sofern keine Versicherungszeit im betroffenen Beitragszeitraum vorhanden sein sollte.
    </p>

  </div>
</details>

## BW1917

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1917 - Zur Verrechnungsposition @1 wurde im Unterschied zum gemeldeten Beitrag € @2 der Beitrag in der Höhe von € @3 verbucht
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsposition<br>
      @2: Beitrag Verrechnungsposition<br>
      @3: Kontrollsumme Verrechnungsposition
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn sich der vom Dienstgeber gemeldete Beitrag zu einer Verrechnungsposition von der vom System ermittelten Kontrollsumme zu dieser Verrechnungsposition unterscheidet.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ mit einer Grundlage in der Höhe von 1.200,00 Euro <br>
      • Verrechnungsposition „Minderung AV auf 2%“
    </p>

    <p>
      Als Beitrag zu dieser Verrechnungsposition werden - 38,00 Euro gemeldet. Von der ÖGK wird eine Kontrollsumme zu dieser Verrechnungsposition in der Höhe von - 36,00 Euro berechnet.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe des korrekten Betrages sind erforderlich.
    </p>

  </div>
</details>

## BW1918

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1918 - Es liegt eine Monatliche Beitragsgrundlagenmeldung ohne verrechenbare Daten vor
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die angegebene Tarifgruppe in der mBGM ist nicht korrekt bzw. nicht für die Abrechnung bei dem angeführten Beitragskonto vorgesehen.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Tarifgruppe ist zu überprüfen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

  </div>
</details>

## BW1921

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1921 - Der Verrechnungsbasisbetrag zur Verrechnungsbasis @1 unterscheidet sich von jenem zur Verrechnungsbasis @2. Diese Differenz ist nicht zulässig. Bitte Sachverhalt klären.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis<br>
      @2: Verrechnungsbasis
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn in einem Tarifblock mehrere Verrechnungsbasen mit unterschiedlich hohen Grundlagen gemeldet werden, obwohl diese in identer Höhe abgerechnet werden müssen. Diese Prüfung wird für alle Beschäftigungsfolgen im Vorschreibebereich durchgeführt.
    </p>

    <p>
      Die mBGM kann nicht verarbeitet werden.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittelt wird eine mBGM Vorschreiber mit folgenden Angaben:<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ in Höhe von 1.000,00 Euro<br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“<br>
      • Verrechnungsbasis „Beitragsgrundlage zur BV“ in Höhe von 1.200,00 Euro<br>
      • Verrechnungsposition „Betriebliche Vorsorge“
    </p>

    <p>
      Die Höhe der „Beitragsgrundlage zur BV“ hat im Regelfall ident zur Höhe der „Allgemeinen Beitragsgrundlage“ zu sein.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Sofern die Differenz nicht nachvollziehbar und somit nicht korrekt ist, sind eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Höhe der „Beitragsgrundlage zur BV“ erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Sofern die Differenz aus nachvollziehbaren Gründen korrekt ist, hat die Kontaktaufnahme mit der ÖGK zu erfolgen, damit die Begründung vermerkt und die Rückfrage abgeschlossen werden kann.
    </p>

  </div>
</details>

## BW1922

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1922 - Für den/die Versicherte(n) @1 VSNR @2 fehlt im Beitragszeitraum @3 für die @4 zum Versicherungsbereich @5 die entsprechende monatliche Beitragsgrundlagenmeldung mit Verrechnung.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Versicherter Name<br>
      @2: VSNR<br>
      @3: Beitragszeitraum<br>
      @4: Beschäftigungsfolge<br>
      @5: Versicherungsbereich
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es wurde keine mBGM für den betroffenen Beitragszeitraum und den betroffenen Dienstnehmer übermittelt.
    </p>

    <p>
      Alternativ wurde eine mBGM mit falschen Angaben übermittelt, sodass diese nicht zugeordnet werden kann.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine mBGM für den betroffenen Beitragszeitraum und den betroffenen Dienstnehmer ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine fehlende Arbeits- und Entgeltbestätigung ist zu übermitteln, sofern der Dienstnehmer Leistungsbezüge der ÖGK beziehen sollte, weshalb keine mBGM übermittelt wurde.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Eine Storno Anmeldung oder eine fehlende Abmeldung ist zu übermitteln, sofern keine Versicherungszeit im betroffenen Beitragszeitraum vorhanden sein sollte.
    </p>

    <p>
      <u>Lösungsmöglichkeit 4:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Daten sind erforderlich.
    </p>

  </div>
</details>

## BW1923

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1923 - Der verrechnete Abschlag @1 ist für die Summe der gemeldeten Verrechnungsbasen im Beitragszeitraum @2 zu Tarifblock mit der Tarifgruppe @3 und Verrechnungsbasis @4 nicht zulässig.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Art des Abschlages, zum Beispiel: „Minderung AV auf 1%“<br>
      @2: Beitragszeitraum<br>
      @3: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (Beginn der Verrechnung „01“)“ bei regelmäßiger Beschäftigung bzw.<br>
      „Angestellter (Beschäftigungstag „01“)“ bei fallweiser Beschäftigung bzw. „Angestellter (erster Tag „01“ bis letzter Tag „13“)“ bei kurzer Beschäftigung
    </p>

    <p>
      @4: Verrechnungsbasis Bezeichnung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn auf Grund der Summe der gemeldeten Beitragsgrundlage ein Abschlag zur Verrechnung nicht zulässig ist.
    </p>

    <p>
      <strong>Beispiel 1:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      Tarifblock 1:<br>
      • Beginn der Verrechnung: „01“<br>
      • Tarifgruppe „Angestellter“ <br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ von 1.600,00 Euro <br>
      • Verrechnungsposition „Minderung AV auf 2%“
    </p>

    <p>
      Tarifblock 2:<br>
      • Beginn der Verrechnung: „20“<br>
      • Tarifgruppe „Angestellter“ <br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ von 560,00 Euro <br>
      • Verrechnungsposition „Minderung AV auf 2%“
    </p>

    <p>
      Die Rückfrage wird angelegt, da der Dienstgeber einen Abschlag („Minderung AV auf 2%“) gemeldet hat, obwohl die Summe der Beitragsgrundlagen zur selben Beschäftigung den Grenzwert für den angegebenen Abschlag überschreitet.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Beitragsgrundlage oder ohne Angabe der „Minderung AV auf 2%“ ist erforderlich.
    </p>

  </div>
</details>

## BW1926

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1926 - Die Meldung der Verrechnungsbasis @1 ist in Kombination mit dem @2 nicht zulässig. Diese Verrechnungsbasis wird deshalb für die Verarbeitung nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis<br>
      @2: Tarifblock (Satzart)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es wird geprüft, ob die Verrechnungsbasis zur Tarifgruppe zulässig ist. Wenn dem nicht so ist, wird die Verrechnungsbasis gestrichen.
    </p>

    <p>
      Es kommt somit zu Differenzen bei der Verbuchung.
    </p>

    <p>
      Bei einer regelmäßigen Beschäftigung ist die Dienstgeberabgabe als Verrechnungsposition bei der Verrechnungsbasis „Allgemeine Beitragsgrundlage“ und einer eventuellen „Sonderzahlung“ separat zu berücksichtigen.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Verrechnungsbasis und die Tarifgruppe sind zu überprüfen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Verrechnungsbasen inklusive korrekter Verrechnungspositionen sind erforderlich.
    </p>

  </div>
</details>

## BW1927

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1927 - Die im Tarifblock (@1) gemeldete Tarifgruppe @2 (@3) ist im gegenständlichen Fall nicht zulässig. Der Tarifblock wurde daher nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifblock (Satzart)<br>
      @2: Tarifgruppe Bezeichnung<br>
      @3:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es wird eine gültige Tarifgruppe gemeldet, die zur Satzart des Tarifblocks (Beschäftigungsfolge) oder zum Beitragsfalltyp nicht zulässig ist.
    </p>

    <p>
      Zum Beispiel kann ein freier Dienstnehmer nicht als fallweise Beschäftigter abgerechnet werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Tarifgruppe und die Verrechnungsbasis sind zu überprüfen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe des korrekten Tarifblocks (Beschäftigungsfolge) sind erforderlich.
    </p>

  </div>
</details>

## BW1930

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1930 - Wir haben für den Beitragszeitraum @1 noch keine monatliche Beitragsgrundlagenmeldung mit Verrechnung erhalten. Wir ersuchen Sie, diese umgehend nachzureichen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Beitragszeitraum
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Für diese Beitragskontonummer wurde für den betroffenen Beitragszeitraum kein mBGM-Paket übermittelt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Das mBGM-Paket ist dringend zu übermitteln.
    </p>

  </div>
</details>

## BW1933

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1933 - Die Verrechnungsposition @1 ist als zwingende Angabe für eine andere Verrechnungsbasis vorgesehen. Bitte um Kontrolle des Sachverhaltes.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsposition
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Diese Rückfrage entsteht, wenn zu einer Verrechnungsbasis, neben der korrekten Verrechnungsposition, zusätzlich eine falsche Verrechnungsposition angeführt wird, die zwingend bei einer anderen Verrechnungsbasis angeführt werden muss.
    </p>

    <p>
      Im Zuge der Prüfung der mBGM vor Verbuchung wird festgestellt, dass diese Kombination aus Verrechnungsbasis und Verrechnungsposition nicht zulässig ist.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“<br>
      • In dieser Verrechnungsbasis wird die Verrechnungsposition „Standard-Tarifgruppenverrechnung (Sonderzahlung)“ gemeldet.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Verrechnungsbasis „Allgemeine Beitragsgrundlage“ ist in Kombination mit der Verrechnungsposition „Standard-Tarifgruppenverrechnung (Sonderzahlung)“ nicht zulässig.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der passenden Verrechnungsbasis in Kombination mit der korrekten Verrechnungsposition sind erforderlich.
    </p>

  </div>
</details>

## BW1934

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1934 - Die der mBGM „kürzer als 1 Monat vereinbarte Beschäftigung“ zum Tarifblock mit der Tarifgruppe @1 zugeordnete Beschäftigung muss kürzer als 1 Monat sein.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Kurzbezeichnung<br>
      <span style="display: inline-block; padding-left: 1rem;">Tarifblockidentifikation:</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p style="padding-left: 1rem;">
      Zum Beispiel: „Angestellter (erster Tag „01“ bis letzter Tag „13“)“
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      In der übermittelten mBGM für kürzer als einen Monat vereinbarte Beschäftigung ist die Versicherungszeit nicht kürzer als einen Monat.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Die Versicherungszeit ist korrekt: Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Satzart sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist nicht korrekt: Eine Richtigstellung der Anmeldung/Richtigstellung der Abmeldung ist erforderlich.
    </p>

  </div>
</details>

## BW1984

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1984 - Das Alter des Dienstnehmers @1 befindet sich außerhalb der zulässigen Altersgrenze für die Gültigkeit der Verrechnungsposition @2. Diese wurde nicht berücksichtigt
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Name des Dienstnehmers<br>
      @2: Verrechnungsposition
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn das Alter des betroffenen Dienstnehmers außerhalb der Altersgrenze für die betroffene Verrechnungsposition liegt.
    </p>

    <p>
      Der Abschlag darf nicht verwendet werden, da das dafür vorgeschriebene Mindestalter nicht erreicht oder das maximale Alter überschritten wurde.
    </p>

    <p>
      <strong>Beispiel 1:</strong><br>
      Die übermittelte mBGM Selbstabrechner enthält für den Dienstnehmer, der am 01.02.1958 geboren ist, folgende Angaben:<br>
      • Verrechnungsposition „Minderung PV um 50%“ (A15)
    </p>

    <p>
      Auf Grund des Alters eines Dienstnehmers (63 Jahre) und der zu Unrecht übermittelten Verrechnungsposition A15 wird die Rückfrage angelegt.
    </p>

    <p>
      <strong>Beispiel 2:</strong><br>
      Die übermittelte mBGM Selbstabrechner enthält für den Dienstnehmer mit dem Geburtsdatum 14.07.1963 folgende Angaben:<br>
      • Tarifgruppe „Angestellte“ <br>
      • Verrechnungsbasis „Beitragsgrundlage bei unbezahltem Urlaub“ <br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung (unbezahlter Urlaub)“ <br>
      • Verrechnungsposition „Minderung PV um 50%“ (A15)
    </p>

    <p>
      Die Rückfrage wird angelegt, da die Verrechnungsposition A15 gemeldet wurde, das Alter des Dienstnehmers jedoch nicht innerhalb der Altersgrenzen (derzeit bei Männern zwischen 65 und 68) liegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM ohne Angabe der nicht zulässigen Verrechnungsposition sind erforderlich.
    </p>

  </div>
</details>

## BW1994

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW1994 - Die Verrechnungsposition @1 wurde nicht berücksichtigt, da keine Neugründerförderungsinformation (Formular NeuFög) vorliegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsposition
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn ein Abschlag wegen einer Neugründerförderung gemeldet wurde, jedoch keine Neugründerförderungsinformation vorliegt.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben: <br>
      • Tarifgruppe „Arbeiter“ <br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ <br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“ <br>
      • Verrechnungsposition „WF-Entfall Neugründerförderung“
    </p>

    <p>
      Der Abschlag „WF-Entfall Neugründerförderung“ ist nicht zulässig, da keine Neugründerförderungsinformation für diesen Dienstgeber vorliegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Der Abschlag wurde in der Verrechnung nicht berücksichtigt. Die mBGM wird ohne Abschlag gespeichert und verbucht.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM ohne Verrechnungsposition „WF-Entfall Neugründerförderung“ sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Das Neugründungsförderungsformular ist der ÖGK zu übermitteln.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM sind erforderlich.
    </p>

  </div>
</details>

## BW2003

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2003 - Die in der mBGM übermittelte Verrechnungsbasis @1 mit der Verrechnungsposition @2 wurde nicht übernommen, wird jedoch bei Anfall im Zuge der Verrechnung automatisch berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis<br>
      @2: Verrechnungsposition
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn der Dienstgeber (Vorschreiber) zu einer mBGM eine Verrechnungsbasis bzw.
    </p>

    <p>
      Verrechnungsposition übermittelt, für die im Beitragsvorschreibeverfahren keine Meldung durch den Dienstgeber vorgesehen ist.
    </p>

    <p>
      Ausnahme: Abschläge im Zusammenhang mit dem Pensionsbezug A15 und A22. Diese müssen vom Dienstgeber gemeldet werden, sollten sie zutreffen, da diese nicht automatisch berücksichtigt werden.
    </p>

    <p>
      Hinweis: Der Abschlag A22 gilt nur für Beitragszeiträume in den Jahren 2024 und 2025.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Vorschreiber mit folgenden Angaben:<br>
      • ein Tarifblock<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ in der Höhe von 1.523,45 Euro <br>
      • Verrechnungsposition „Standard-Tarifgruppenverrechnung“<br>
      • Verrechnungsposition „Minderung AV auf 1%“
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Im Vorschreibebereich werden Zu- und Abschläge (Ausnahmen beachten) von der ÖGK amtlich erstellt. Das Service-Entgelt wird automatisch vorgeschrieben.
    </p>

    <p>
      Künftige mBGM-Übermittlungen sind ohne Zu- und Abschläge zu übermitteln.
    </p>

  </div>
</details>

## BW2008

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2008 - Es liegen zwei/mehrere gleichzeitig eingelangte mBGM Original zum selben Versicherten im Beitragszeitraum mit derselben Satzart vor
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es wurden zwei oder mehrere mBGM Vorschreiber vom Dienstgeber übermittelt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die mehrfach übermittelten mBGM werden von der ÖGK als Mehrfachmeldungen erkannt, sofern diese Meldungen ident sind.
    </p>

    <p>
      Es sind keine weiteren Schritte vom Dienstgeber erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die mehrfach übermittelten mBGM werden von der ÖGK NICHT als Mehrfachmeldungen erkannt, sofern diese nicht ident sind.
    </p>

    <p>
      Eine Storno-mBGM für die falsche mBGM ist zu übermitteln.
    </p>

  </div>
</details>

## BW2011

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2011 - Im Beitragszeitraum @1 liegen noch nicht bestätigte Versicherungszeiten vor. Die mBGM kann nicht verarbeitet werden, solange dieser Sachverhalt zutrifft. Bitte um Kontrolle und Bereinigung des Sachverhaltes.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Beitragszeitraum
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Angaben der übermittelten mBGM sind nicht vollständig.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Versicherungszeit vom 01.05.2026 bis 10.05.2026 und eine weitere Versicherungszeit vom 13.05.2026 bis 20.05.2026.
    </p>

    <p>
      In der übermittelten mBGM wurde nur ein Tarifblock mit „Beginn der Verrechnung“ = „13“ angeführt.
    </p>

    <p>
      Der zweite Tarifblock mit „Beginn der Verrechnung“ = „01“ fehlt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Anzahl an Tarifblöcken sind erforderlich.
    </p>

  </div>
</details>

## BW2012

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2012 - Im Zeitraum von @1 bis @2 liegen für den Bereich @3 zwar Versicherungszeiten vor, es wurde(n) für diesen Zeitraum jedoch keine Beitragsgrundlage(n) gemeldet. Bitte um Kontrolle und Bereinigung des Sachverhaltes.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Zeitraum Von<br>
      @2: Zeitraum Bis<br>
      @3: Versicherungsbereich
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die übermittelte mBGM enthält nur eine „Beitragsgrundlage zur BV“, jedoch keine „Allgemeine Beitragsgrundlage“, obwohl Zeiten zur Sozialversicherung sowie Zeiten zur Betrieblichen Vorsorge vorliegen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Es sind eine Storno Anmeldung und eine neuerliche Anmeldung nur zur Betrieblichen Vorsorge zu übermitteln, sofern die Versicherungszeit nur der Betrieblichen Vorsorge unterliegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der „Allgemeinen Beitragsgrundlage“ und der „Beitragsgrundlage zur BV“ sind erforderlich, sofern die Zeiten zur Sozialversicherung korrekt sind.
    </p>

  </div>
</details>

## BW2013

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2013 - Die mBGM enthält ausschließlich Beitragsgrundlagen für den Bereich BV. Es konnten im Beitragszeitraum der mBGM jedoch keine Versicherungszeiten für diesen Bereich ermittelt werden.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Anmeldung zur Zeit der Betrieblichen Vorsorge fehlt.
    </p>

    <p>
      Alternativ wurde die mBGM fälschlicherweise übermittelt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Anmeldung zur Zeit der Betrieblichen Vorsorge ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno-mBGM ist zu übermitteln, sofern keine Zeit zur Betrieblichen Vorsorge vorliegen sollte.
    </p>

  </div>
</details>

## BW2014

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2014 - Das an der mBGM gemeldete Kennzeichen Verrechnungsgrundlage @1 stimmt mit dem von uns ermittelten Kennzeichen @2 nicht überein. Die mBGM wurde mit dem von uns ermittelten Kennzeichen bearbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Das mit der mBGM gemeldete Kennzeichen „Verrechnungsgrundlage“<br>
      @2: Das von der ÖGK ermittelte Kennzeichen „Verrechnungsgrundlage“
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die mBGM wurde mit der Verrechnungsgrundlage „SV-Verrechnung mit Zeit in der SV“ übermittelt.
    </p>

    <p>
      Es liegt jedoch eine Zeit zur Betrieblichen Vorsorge vor und in der mBGM wurde die Verrechnungsbasis „Beitragsgrundlage zur BV“ angeführt.
    </p>

    <p>
      Die korrekte Verrechnungsgrundlage wäre „SV-Verrechnung und BV-Verrechnung mit Zeit in der SV und BV“.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Diese Rückfrage tritt nur bei Vorschreibern auf.
    </p>

    <p>
      Es ist keine Handlung notwendig. Beachten Sie die korrekte Verrechnungsgrundlage bei der nächsten zu übermittelnden mBGM.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Bei Vorschreibern wird die „Beitragsgrundlage zur BV“ von der ÖGK anhand der angeführten „Allgemeinen Beitragsgrundlage“ ermittelt. Bei künftigen Übermittlungen einer mBGM nur die „Allgemeine Beitragsgrundlage“ anführen.
    </p>

  </div>
</details>

## BW2015

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2015 - Für den Tarifblock mit der Tarifgruppe @1 (@2) und der Verrechnungsbasis @3 ist keine entsprechende Versicherungszeit BV vorhanden.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Bezeichnung<br>
      @2:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      @3: Verrechnungsbasis
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn die mBGM die Verrechnungsbasis „Beitragsgrundlage zur BV“ beinhaltet, jedoch keine entsprechende Versicherungszeit zur Betrieblichen Vorsorge ermittelt werden kann.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Richtigstellung der Anmeldung mit Betrieblicher Vorsorge ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM ohne Angabe der Betrieblichen Vorsorge sind erforderlich.
    </p>

  </div>
</details>

## BW2019

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2019 - Die gemeldete allgemeine Beitragsgrundlage in Höhe von € @1 für den Tarifblock mit der Tarifgruppe @2 übersteigt die Geringfügigkeitsgrenze.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Betrag<br>
      @2: Tarifgruppe Kurzbezeichnung + Beschäftigungstag und Wert aus „Beschäftigungstag der fallweisen Beschäftigung“
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Der Clearingfall wird erzeugt, wenn im Vorschreibebereich eine mBGM für eine geringfügige fallweise Beschäftigung übermittelt wird und die Beitragsgrundlage zur Verrechnungsbasis „Allgemeine Beitragsgrundlage“ die Geringfügigkeitsgrenze übersteigt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Satzart, die Beitragsgrundlage bzw. die Tarifgruppe sind zu überprüfen. Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Tarifgruppe oder der korrekten „Allgemeinen Beitragsgrundlage“ sind erforderlich.
    </p>

  </div>
</details>

## BW2020

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2020 - Die gemeldete allgemeine Beitragsgrundlage in Höhe von € @1 für den Tarifblock mit der Tarifgruppe @2 liegt unter bzw. ist gleich der Geringfügigkeitsgrenze.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Betrag<br>
      @2: Tarifgruppe Kurzbezeichnung + Beschäftigungstag und Wert aus „Beschäftigungstag der fallweisen Beschäftigung“
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn bei einer mBGM für fallweise Beschäftigte Vorschreiber die gemeldete „Allgemeine Beitragsgrundlage“ für einen Tarifblock zu einer Vollbeschäftigung unter der Geringfügigkeitsgrenze liegt bzw. der Geringfügigkeitsgrenze entspricht.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Beitragsgrundlage sind erforderlich.
    </p>

  </div>
</details>

## BW2021

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2021 - Die mBGM wurde nicht verarbeitet, da für den Beitragszeitraum @1 keine Versicherungszeit SV/BV gespeichert ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Beitragszeitraum
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Eine Anmeldung zur Sozialversicherung und Betrieblichen Vorsorge fehlt.
    </p>

    <p>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Anmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Abmeldung ist erforderlich, sofern diese nicht korrekt ist.
    </p>

  </div>
</details>

## BW2028

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2028 - Die im Tarifblock zur Tarifgruppe @1 (@2) gemeldete Grundlage BV weicht von der gemeldeten Grundlage SV bezogen auf die Vorschreibetage ab. Die tolerierte Abweichung der gemeldeten Grundlage BV beträgt € @3.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Bezeichnung<br>
      @2:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      @3: berechnete mögliche Toleranz
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Bei dieser Rückfrage muss es sich um ein Vorschreibekonto handeln.
    </p>

    <p>
      Unterscheiden sich innerhalb eines Beitragszeitraumes die Anzahl der Vorschreibetage in der SV von der Anzahl der Vorschreibetage in der BV erfolgt eine rechnerische Prüfung auf Richtigkeit der angegebenen Beitragsgrundlagen. Liegt eine Abweichung außerhalb der Toleranzgrenze im Bereich der Betrieblichen Vorsorge vor, wird die Rückfrage ausgelöst.
    </p>

    <p>
      Die Prüfung auf Richtigkeit erfolgt nach festgelegten Berechnungsformeln:
    </p>

    <p>
      Die Beitragsgrundlage zur Verrechnungsbasis „Beitragsgrundlage zur BV“ wird zunächst aus <br>
      • der Beitragsgrundlage der Verrechnungsbasis „Allgemeine Beitragsgrundlage“ und<br>
      • den Vorschreibetagen für die Zeit der Betrieblichen Vorsorge
    </p>

    <p>
      berechnet.
    </p>

    <p>
      Danach wird dieser Wert mit der gemeldeten „Beitragsgrundlage zur BV“ (abzüglich einer allfälligen Sonderzahlung) verglichen. Ergibt dieser Vergleich eine Abweichung, die über das Maß der Grundlage zur Betrieblichen Vorsorge für einen Vorschreibetag hinausgeht (Toleranzgrenze), wird diese Rückfrage angelegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Beitragsgrundlagen und die Anzahl der Vorschreibetage sind nochmals zu überprüfen. Es ist auf einen untermonatigen Beginn der Betrieblichen Vorsorge zu achten.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung mit Angabe der korrekten Beitragsgrundlage zur BV sind erforderlich.
    </p>

  </div>
</details>

## BW2029

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2029 - Die im Tarifblock zur Tarifgruppe @1 (@2) gemeldete Grundlage @3 ist mit der Höchstbeitragsgrundlage begrenzt. Die Übermittlung der Grundlagen im Vorschreibebereich hat ohne Begrenzung zur Höchstbeitragsgrundlage zu erfolgen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Bezeichnung<br>
      @2:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      @3: „SV“ oder „BV“
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn zu einer mBGM Vorschreiber eine Grundlage SV oder Grundlage BV gemeldet wurde, die mit der Höchstbeitragsgrundlage gedeckelt wurde.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Vorschreiber mit folgenden Angaben:<br>
      • Verrechnungsbasis „Allgemeine Beitragsgrundlage“ 6.450,00 Euro<br>
      • Verrechnungsbasis „Beitragsgrundlage zur BV“ 7.025,00 Euro
    </p>

    <p>
      Im Beitragszeitraum der mBGM liegen 30 Vorschreibetage SV und 30 Vorschreibetage BV vor. Die tägliche Höchstbeitragsgrundlage für 2026 beträgt 231,00 Euro.
    </p>

    <p>
      Die „Allgemeine Beitragsgrundlage“ ist in Höhe des Entgeltes, ohne Berücksichtigung der Höchstbeitragsgrundlage, zu melden. Bei der Berechnung der Beiträge und der anschließenden Beitragsvorschreibung wird die Höchstbeitragsgrundlage automatisch berücksichtigt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung einer mBGM mit der „Allgemeinen Beitragsgrundlage“, welche dem tatsächlichen Entgelt entspricht (im Beispiel = 7.025,00 Euro).
    </p>

  </div>
</details>

## BW2030

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2030 - Die im Tarifblock zur Tarifgruppe @1 (@2) gemeldete Grundlage überschreitet die Geringfügigkeitsgrenze.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Bezeichnung<br>
      @2:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn eine mBGM Vorschreiber für eine regelmäßige bzw. kurze Beschäftigung übermittelt wurde und die „Allgemeine Beitragsgrundlage“ zu einem Tarifblock für eine geringfügige Beschäftigung die monatliche Geringfügigkeitsgrenze übersteigt.
    </p>

    <p>
      Diese Prüfung wird im Vorschreibebereich für regelmäßige bzw. kurze Beschäftigung durchgeführt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Beitragsgrundlage bzw. die Tarifgruppe sind zu überprüfen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten „Allgemeinen Beitragsgrundlage“ sind erforderlich.
    </p>

  </div>
</details>

## BW2031

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2031 - Für den/die Versicherte(n) @1 VSNR @2 fehlt im Beitragszeitraum @3 für die @4 zum Versicherungsbereich @5 die entsprechende monatliche Beitragsgrundlagenmeldung.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Versicherter Name<br>
      @2: VSNR<br>
      @3: Beitragszeitraum<br>
      @4: Beschäftigungsfolge<br>
      @5: Versicherungsbreich
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Hierbei handelt es sich um die mBGM SV/BV Urgenz. Die mBGM fehlt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Übermittlung einer mBGM ist erforderlich.
    </p>

  </div>
</details>

## BW2032

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2032 - Für die Beschäftigung von @1: @2 wurde im Beitragszeitraum @3 für den Bereich @4 keine entsprechende Beitragsgrundlage gemeldet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: BeschäftigungVon<br>
      @2: BeschäftigungBis<br>
      @3: Beitragszeitraum<br>
      @4: Versicherungsbereich
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es handelt sich um eine mBGM SV/BV Urgenz.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Übermittlung einer mBGM ist erforderlich.
    </p>

  </div>
</details>

## BW2034

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2034 - Die für den Tarifblock mit der Tarifgruppe @1 (@2) gemeldete Satzart @3 (@4) des Tarifblocks ist für freie Dienstnehmer vorgesehen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Bezeichnung<br>
      @2:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      @3: Satzart des Tarifblocks<br>
      @4:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn innerhalb einer mBGM, welche nicht für freie Dienstnehmer vorgesehen ist, ein Tarifblock mit einer Tarifgruppe für freie Dienstnehmer übermittelt wird.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit korrekter Tarifgruppe bzw. korrekter mBGM sind erforderlich.
    </p>

  </div>
</details>

## BW2038

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2038 - Die Summe der gemeldeten Grundlagen in Höhe von € @1 für eine geringfügige Beschäftigung übersteigt die monatliche Geringfügigkeitsgrenze. Die Grundlagen für die/den Versicherte/n wurden nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Summe Grundlage-AB im Monat
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn für eine laufende geringfügige Beschäftigung die Summe der gemeldeten allgemeinen Beitragsgrundlagen die Geringfügigkeitsgrenze überschreitet.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Übermittlung einer mBGM Selbstabrechner mit folgenden Angaben:<br>
      • Tarifgruppe „geringfügig beschäftigter Arbeiter“<br>
      • Beitragsgrundlage „allgemeine Beitragsgrundlage“ von 600,00 Euro
    </p>

    <p>
      Die Rückfrage wird angelegt, da die Beitragsgrundlage die Geringfügigkeitsgrenze überschreitet.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Liegt die gemeldete Beitragsgrundlage tatsächlich über der Geringfügigkeitsgrenze, ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Tarifgruppe erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Bei Angabe einer falschen Beitragsgrundlage in der mBGM ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Beitragsgrundlage erforderlich.
    </p>

  </div>
</details>

## BW2041

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2041 - Die Hochrechnung auf einen vollen Monat für die Folgemonate für den Tarifblock mit der Tarifgruppe @1 in Höhe von @2 übersteigt die mtl. GFG-Grenze. Ohne weitere mBGM für den Folgemonat erfolgt ggf. die Abrechnung mit der mtl. GFG-Grenze.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Kurzbezeichnung<br>
      @2: hochgerechnete allgemeine Beitragsgrundlage
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn bei einer kürzer als einen Monat vereinbarten Beschäftigung die Hochrechnung der „Allgemeinen Beitragsgrundlage“ auf einen vollen Monat die monatliche Geringfügigkeitsgrenze übersteigt.
    </p>

    <p>
      Ohne weitere Meldung einer mBGM für die Folgemonate erfolgt eine Abrechnung mit der monatlichen Geringfügigkeitsgrenze.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Höhe der Beitragsgrundlage ist zu überprüfen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit korrekter Beitragsgrundlage sind erforderlich.
    </p>

  </div>
</details>

## BW2053

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2053 - Die @1 wurde nicht verarbeitet, da für die Versicherte/den Versicherten ein unbestätigtes Todesdatum vorliegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Für einen bereits verstorbenen Dienstnehmer wurde eine Meldung über das Todesdatum hinaus übermittelt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Prüfung des Todesdatums ist durchzuführen.
    </p>

    <p>
      Ein Storno der mBGM und eine Neuübermittlung mit korrektem Datum (spätestens bis zum Todesdatum) sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der mBGM ist zu übermitteln, sofern die mBGM fälschlicherweise übermittelt wurde.
    </p>

  </div>
</details>

## BW2056

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2056 - Eine Überschreitung der Geringfügigkeitsgrenze bei der Verrechnungsbasis @1 mit der Höhe € @2 ist in Kombination mit der im Tarifblock gemeldeten Tarifgruppe @3 nicht zulässig. Die Grundlage für den/die Versicherte/n wurde nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Bezeichnung<br>
      @2: Betrag<br>
      @3: Tarifgruppe Kurzbezeichnung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn bei einem Tarifblock zu einer geringfügigen Beschäftigung eine Beitragsgrundlage über der Geringfügigkeitsgrenze gemeldet wird.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Liegt die gemeldete Beitragsgrundlage tatsächlich über der Geringfügigkeitsgrenze, ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Tarifgruppe erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Bei Angabe einer falschen Beitragsgrundlage in der mBGM ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Beitragsgrundlage erforderlich.
    </p>

  </div>
</details>

## BW2057

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2057 - Die gemeldete Verrechnungsbasis-@1 in Höhe von € @2 für den Tarifblock mit der Tarifgruppe @3 stimmt nicht mit der Verrechnungsbasis-@4 in Höhe von € @5 überein. Die Grundlage für die/den Versicherte/n wurde nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Bezeichnung<br>
      @2: Betrag<br>
      @3: Tarifgruppe Kurzbezeichnung<br>
      @4: Verrechnungsbasis Bezeichnung<br>
      @5: Betrag
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn die „Allgemeine Beitragsgrundlage“ und die „Beitragsgrundlage zur BV“ nicht ident sind.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Bei Angabe einer falschen Beitragsgrundlage in der mBGM ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Beitragsgrundlage erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Ist die Abweichung gerechtfertigt, ist eine Kontaktaufnahme mit der ÖGK erforderlich.
    </p>

  </div>
</details>

## BW2058

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2058 - Die gemeldete Verrechnungsbasis-@1 in Höhe von € @2 für den Tarifblock mit der Tarifgruppe @3 stimmt nicht mit der Verrechnungsbasis-@4 in Höhe von € @5 überein.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Bezeichnung<br>
      @2: Betrag<br>
      @3: Tarifgruppe Kurzbezeichnung<br>
      @4: Verrechnungsbasis Bezeichnung<br>
      @5: Betrag
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn die „Allgemeine Beitragsgrundlage“ und die „Beitragsgrundlage zur BV“ nicht ident sind.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Bei Angabe einer falschen Beitragsgrundlage in der mBGM ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Beitragsgrundlage erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Ist die Abweichung gerechtfertigt, ist eine Kontaktaufnahme mit der ÖGK erforderlich.
    </p>

  </div>
</details>

## BW2059

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2059 - Die gemeldete Verrechnungsbasis-@1 in Höhe von € @2 für den Tarifblock mit der Tarifgruppe @3 entspricht nicht der Höchstbeitragsgrundlage je Verrechnungstag. Die Grundlage für die/den Versicherte/n wurde nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Bezeichnung<br>
      @2: Betrag<br>
      @3: Tarifgruppe Kurzbezeichnung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn die gemeldete Beitragsgrundlage nicht der Höchstbeitragsgrundlage je Verrechnungstag entspricht.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Versicherungszeit und die Beitragsgrundlage sind zu überprüfen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit korrekter Beitragsgrundlage sind erforderlich.
    </p>

  </div>
</details>

## BW2060

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2060 - Eine Unterschreitung der Geringfügigkeitsgrenze bei der Verrechnungsbasis @1 mit der Höhe € @2 ist in Kombination mit der im Tarifblock gemeldeten Tarifgruppe @3 nicht zulässig. Die Grundlage für den/die Versicherte/n wurde nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis Bezeichnung<br>
      @2: Betrag<br>
      @3: Tarifgruppe Kurzbezeichnung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn bei einem Tarifblock zu einer Vollversicherung eine Beitragsgrundlage unter der Geringfügigkeitsgrenze gemeldet wird.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Liegt die gemeldete Beitragsgrundlage tatsächlich unter der Geringfügigkeitsgrenze, ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Tarifgruppe erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Bei Angabe einer falschen Beitragsgrundlage in der mBGM ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Beitragsgrundlage erforderlich.
    </p>

  </div>
</details>

## BW2061

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2061 - Die Summe der gemeldeten Grundlagen in Höhe von € @1 für eine geringfügige Beschäftigung übersteigt die 2-fache mtl. Geringfügigkeitsgrenze. Die Grundlagen für die/den Versicherte/n wurden nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Summe Grundlage-AB im Monat
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn für eine laufende geringfügige Beschäftigung die Summe der gemeldeten allgemeinen Beitragsgrundlagen die doppelte Geringfügigkeitsgrenze überschreitet.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Liegt die gemeldete Beitragsgrundlage tatsächlich über der doppelten Geringfügigkeitsgrenze, ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Tarifgruppe erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen.
    </p>

    <p>
      Bei Angabe einer falschen Beitragsgrundlage in der mBGM ist die mBGM zu stornieren und eine Neuübermittlung mit korrekter Beitragsgrundlage erforderlich.
    </p>

  </div>
</details>

## BW2062

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2062 - Die Hochrechnung auf einen vollen Monat für die Folgemonate für den Tarifblock mit der Tarifgruppe @1 in Höhe von @2 übersteigt die 2-fache mtl. GFG-Grenze. Ohne weitere mBGM für den Folgemonat erfolgt ggf. die Abrechnung mit der 2fachen mtl. GFG-Grenze.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Kurzbezeichnung<br>
      @2: hochgerechnete allgemeine Beitragsgrundlage
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn bei einer kürzer als einen Monat vereinbarten Beschäftigung die Hochrechnung der „Allgemeinen Beitragsgrundlage“ auf einen vollen Monat die doppelte monatliche Geringfügigkeitsgrenze übersteigt.
    </p>

    <p>
      Ohne weitere Meldung einer mBGM für die Folgemonate erfolgt eine Abrechnung mit der doppelten monatlichen Geringfügigkeitsgrenze.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Höhe der Beitragsgrundlage ist zu überprüfen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit korrekter Beitragsgrundlage sind erforderlich.
    </p>

  </div>
</details>

## BW2063

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2063 - Die im Tarifblock @1 (@2) gemeldete Grundlage mit KE/UE übersteigt die 2-fache mtl. GFG-Grenze. Die Grundlage für die/den Versicherte/n wurde nicht gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Tarifgruppe Bezeichnung<br>
      @2:<br>
      <span style="display: inline-block; padding-left: 1rem;">• bei regelmäßiger Beschäftigung: Beginn der Verrechnung + Wert aus „Beginn der Verrechnung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei fallweiser Beschäftigung: Beschäftigungstag + Wert aus „Beschäftigungstag der fallweisen Beschäftigung“</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• bei kürzer als einen Monat vereinbarter Beschäftigung: erster Tag + Wert aus „Erster Tag der kürzer als einen Monat vereinbarten Beschäftigung“ bis letzter Tag + Wert aus „Letzter Tag der kürzer als einen Monat vereinbarten Beschäftigung“</span>
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn die gemeldete Grundlage mit Kündigungsentschädigung/Urlaubsersatzleistung die doppelte monatliche Geringfügigkeitsgrenze überschreitet.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Versicherungszeit und die Beitragsgrundlage sind zu überprüfen.
    </p>

    <p>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit korrekter Beitragsgrundlage sind erforderlich.
    </p>

  </div>
</details>

## BW2064

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2064 - Die „Ausbuchung § 69“ zur @1 in der Höhe von € @2 wurde aufgrund einer neuerlichen Überprüfung um € @3 reduziert. Dieser Beitrag ist als „Einbuchung § 69“ am Beitragskonto ersichtlich.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Versicherungszweig<br>
      @2: Höhe der ursprünglichen Ausbuchung § 69<br>
      @3: Höhe der Einbuchung § 69
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Ihr § 69 Rückforderungsantrag wurde bearbeitet. Die entsprechende Buchung können Sie im DG-Dashboard einsehen.
    </p>

  </div>
</details>

## BW2067

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2067 - Der Beitrag zur @1 in Höhe von € @2 kann nicht rückverrechnet werden, da bereits eine Leistung gem. § 69 Abs. 2 ASVG erbracht wurde. Dieser Beitrag ist als „Ausbuchung § 69“ am Beitragskonto ersichtlich.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Versicherungszweig<br>
      @2: Höhe der Ausbuchung § 69
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die mBGM wurde berichtigt, was zu einer Ausbuchung § 69 geführt hat, da bereits eine Leistung gemäß § 69 Abs. 2 ASVG erbracht wurde.
    </p>

    <p>
      Wir ersuchen Sie, den Sachverhalt für die Rückverrechnung schriftlich an die zuständige Landesstelle zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Nach schriftlicher Erläuterung des Sachverhaltes durch den Dienstgeber für die Rückverrechnung wird durch die ÖGK geprüft, ob eine Einbuchung § 69 zulässig ist.
    </p>

    <p>
      Ist diese zulässig, wird die Einbuchung § 69 durch die ÖGK vorgenommen.
    </p>

    <p>
      Ist diese nicht zulässig, wird der Dienstgeber darüber informiert.
    </p>

  </div>
</details>

## BW2068

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2068 - Die „Ausbuchung § 69“ zur @1 in der Höhe von € @2 wurde aufgrund einer Korrektur um € @3 reduziert. Dieser Beitrag ist als „Korrektur Ausbuchung § 69“ am Beitragskonto ersichtlich.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Versicherungszweig<br>
      @2: Ursprüngliche Höhe der Ausbuchung § 69<br>
      @3: Höhe der Korrektur Ausbuchung § 69
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die mBGM wurde berichtigt, was zu einer Korrektur der Ausbuchung § 69 geführt hat.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Nach schriftlicher Erläuterung des Sachverhaltes durch den Dienstgeber für die Rückverrechnung wird durch die ÖGK geprüft, ob eine Einbuchung § 69 zulässig ist.
    </p>

    <p>
      Ist diese zulässig, wird die Einbuchung § 69 durch die ÖGK vorgenommen.
    </p>

    <p>
      Ist diese nicht zulässig, wird der Dienstgeber darüber informiert.
    </p>

  </div>
</details>

## BW2080

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2080 - Das mBGM-Paket/die mBGM und damit die Verrechnung betrifft einen Zeitraum außerhalb der gesetzlich vorgesehen Verjährungsfrist. Eine automatische Verarbeitung ist nicht vorgesehen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u>
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Eine Korrektur der mBGM 01/2020 wird erst mit 07/2026 übermittelt.
    </p>

    <p>
      Auf Grund der Verjährungsfrist kann die mBGM nicht automatisch verbucht werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Nach schriftlicher Erläuterung des Sachverhaltes durch den Dienstgeber über die Korrektur wird durch die ÖGK geprüft, ob eine Einbuchung zulässig ist.
    </p>

    <p>
      Ist diese zulässig, wird die Einbuchung durch die ÖGK vorgenommen.
    </p>

    <p>
      Ist diese nicht zulässig, wird der Dienstgeber darüber informiert.
    </p>

  </div>
</details>

## BW2081

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2081 - Das mBGM-Paket/die mBGM und damit die Verrechnung betrifft einen Zeitraum außerhalb der gesetzlich vorgesehen Verjährungsfrist. Eine automatische Verarbeitung ist nicht vorgesehen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <strong>Beispiel:</strong><br>
      Eine Korrektur der mBGM 01/2020 wird erst mit 07/2026 übermittelt.
    </p>

    <p>
      Auf Grund der Verjährungsfrist kann die mBGM nicht automatisch verbucht werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Nach schriftlicher Erläuterung des Sachverhaltes durch den Dienstgeber über die Korrektur wird durch die ÖGK geprüft, ob eine Einbuchung zulässig ist.
    </p>

    <p>
      Ist diese zulässig, wird die Einbuchung durch die ÖGK vorgenommen.
    </p>

    <p>
      Ist diese nicht zulässig, wird der Dienstgeber darüber informiert.
    </p>

  </div>
</details>

## BW2082

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2082 - Die mBGM ohne Verrechnung wurde durch die ÖGK automatisch storniert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage dient als Hinweis.
    </p>

    <p>
      Sofern die mBGM für den betroffenen Beitragszeitraum bereits übermittelt wurde, besteht kein Handlungsbedarf.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Sofern die mBGM für den betroffenen Beitragszeitraum NICHT übermittelt wurde, ist diese zu übermitteln.
    </p>

  </div>
</details>

## BW2084

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2084 - Der Verrechnungsbasisbetrag zur Verrechnungsbasis @1 ist nicht kleiner/gleich dem Verrechnungsbasisbetrag zur Verrechnungsbasis @2 und wurde daher nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis<br>
      @2: Verrechnungsbasis
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Der Clearingfall wird erzeugt, wenn die Beitragsgrundlage zur Verrechnungsbasis „Allgemeine Beitragsgrundlage für PV-Reduktion“ die doppelte Geringfügigkeitsgrenze nicht erreicht und diese nicht kleiner oder in gleicher Höhe der Beitragsgrundlage zur Verrechnungsbasis „Allgemeine Beitragsgrundlage“ gemeldet wurde.
    </p>

    <p>
      Es kommt somit zu Differenzen bei der Verbuchung.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Grundlagen sind erforderlich.
    </p>

  </div>
</details>

## BW2087

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2087 - Der Verrechnungsbasisbetrag zur Verrechnungsbasis @1 ist nicht kleiner/gleich der doppelten Geringfügigkeitsgrenze in Höhe von € @2 und wurde daher nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsbasis<br>
      @2: doppelte monatliche Geringfügigkeitsgrenze
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, da die höchstmögliche Reduktion (= doppelte Geringfügigkeitsgrenze) des Dienstnehmeranteiles in der Pensionsversicherung im Bereich der Verrechnungsbasis „Allgemeine Beitragsgrundlage für PV-Reduktion“ überschritten wird.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Grundlagen sind erforderlich.
    </p>

  </div>
</details>

## BW2088

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    BW2088 - Die Verrechnungsposition @1 ist gemeinsam mit der Verrechnungsposition @2 nicht zulässig. Beide Verrechnungspositionen wurden daher nicht berücksichtigt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Verrechnungsposition<br>
      @2: Verrechnungsposition
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Wenn in einem Tarifblock zur Verrechnungsbasis RP („Allgemeine Beitragsgrundlage für PV-Reduktion“) die Verrechnungsposition A22 („Reduktion DN-Anteil PV“) und zu einer weiteren Verrechnungsbasis die Verrechnungsposition A15 („Minderung PV um 50%“) gemeldet wurden, werden beide Verrechnungspositionen gestrichen. Es wird die Rückfrage angelegt.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Die monatliche Grenze für geringfügige Beschäftigung für 2025 beträgt 551,10 Euro.
    </p>

    <p>
      Übermittlung einer mBGM Selbstabrechner:
    </p>

    <p>
      Die mBGM enthält einen Tarifblock mit der Verrechnungsbasis RP („Allgemeine Beitragsgrundlage für PV-Reduktion“) in der Höhe von 756,23 Euro und der Verrechnungsposition A22.
    </p>

    <p>
      Im selben Tarifblock ist die Verrechnungsbasis AB („Allgemeine Beitragsgrundlage“) mit einem Verrechnungsbasis-Betrag in Höhe von 756,23 Euro enthalten. Zu dieser Verrechnungsbasis wurde unter anderem die Verrechnungsposition A15 gemeldet.
    </p>

    <p>
      Da in einem Tarifblock zur Verrechnungsbasis AB die Verrechnungsposition A15 und zur Verrechnungsbasis RP die Verrechnungsposition A22 gemeldet wurden, wird die Rückfrage angelegt.
    </p>

    <p>
      Eine Kombination der Abschläge A15 und A22 ist nicht zulässig.
    </p>

    <p>
      Hinweis: Der Abschlag A22 gilt nur für Beitragszeiträume in den Jahren 2024 und 2025.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Verrechnungsposition sind erforderlich.
    </p>

  </div>
</details>

## MW0116

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW0116 - Im Feld @1 wurden keine Daten angegeben. Die Meldung wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Feldbezeichnung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Belegung der Datenfelder entspricht nicht den Formatvorschriften der aktuellen Organisationsbeschreibung „Datenaustausch mit Dienstgebern (DM)“.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung nach den Formatvorschriften der aktuellen Organisationsbeschreibung „Datenaustausch mit Dienstgebern (DM)“ ist erforderlich.
    </p>

  </div>
</details>

## MW0117

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW0117 - Der angegebene Wert @1 für das Feld @2 entspricht nicht den Formatvorschriften (@3).
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: variabel<br>
      @2: Feldbezeichnung<br>
      @3: festgelegtes Format
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Der angegebene Wert 2 für das Feld Geringfügigkeit JN entspricht nicht den Formatvorschriften (J oder N).
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung nach den Formatvorschriften der aktuellen Organisationsbeschreibung „Datenaustausch mit Dienstgebern (DM)“ ist erforderlich.
    </p>

  </div>
</details>

## MW0120

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW0120 - Die angegebene Versicherungsnummer (@1) im Feld @2 ist ungültig.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Versicherungsnummer auf der Papiermeldung<br>
      @2: Feldbezeichnung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Der Dienstnehmer hat dem Dienstgeber seine Versicherungsnummer bekannt zu geben.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine VSNR-Anforderung ist durchzuführen, sofern noch keine VSNR in Österreich für den betroffenen Dienstnehmer angelegt wurde.
    </p>

    <p>
      Eine Stornomeldung und eine Neuübermittlung der Meldung mit Angabe des Referenzwertes der VSNR-Anforderung in der Neumeldung sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Stornomeldung und eine Neuübermittlung der Meldung mit korrekter Versicherungsnummer sind erforderlich.
    </p>

  </div>
</details>

## MW0124

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW0124 - Das Dokument wurde mehrfach vorgelegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Meldung wurde mehrfach vorgelegt und wird daher nicht verarbeitet. Es sind keine weiteren Handlungen Ihrerseits notwendig.
    </p>

  </div>
</details>

## MW0164

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW0164 - Das Datum liegt außerhalb des zulässigen Bereichs (01.01.1800 bis 31.12.2999) im Datenfeld @1.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      In der übermittelten Meldung wurde ein unzulässiges Datum angegeben.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung mit Angabe eines zulässigen Datums ist erforderlich.
    </p>

  </div>
</details>

## MW1820

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW1820 - Struktur der mBGM fehlerhaft (Bestand: @1, mBGM-Referenzwert: @2, Satzlaufnummer: @3). Die mBGM wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Ordnungsbegriff Ursprung<br>
      @2: Referenzwert der mBGM<br>
      @3: Satzlaufnummer
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Belegung der Datenfelder entspricht nicht den Formatvorschriften der aktuellen Organisationsbeschreibung „Datenaustausch mit Dienstgebern (DM)“.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung nach den Formatvorschriften der aktuellen Organisationsbeschreibung „Datenaustausch mit Dienstgebern (DM)“ ist erforderlich.
    </p>

  </div>
</details>

## MW1821

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW1821 - Die Daten im mBGM-Paket-Schlusssatz entsprechen nicht den Daten im MBGM-Paket-Beginn (Bestand: @1, Paketreferenzwert: @2)
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Ordnungsbegriff Ursprung<br>
      @2: Referenzwert des mBGM-Paketes
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Belegung der Datenfelder entspricht nicht den Formatvorschriften der aktuellen Organisationsbeschreibung „Datenaustausch mit Dienstgebern (DM)“.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung nach den Formatvorschriften der aktuellen Organisationsbeschreibung „Datenaustausch mit Dienstgebern (DM)“ ist erforderlich.
    </p>

  </div>
</details>

## MW1825

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW1825 - Die Satzart des Tarifblocks passt nicht zur mBGM (Bestand: @1, mBGM-Referenzwert: @2, Satzlaufnummer: @3, Satzart: @4). Die mBGM wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Ordnungsbegriff Ursprung<br>
      @2: Referenzwert der mBGM<br>
      @3: Satzlaufnummer<br>
      @4: Satzart der Tarifgruppe
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Belegung der Datenfelder entspricht nicht den Formatvorschriften der aktuellen Organisationsbeschreibung „Datenaustausch mit Dienstgebern (DM)“.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung nach den Formatvorschriften der aktuellen Organisationsbeschreibung „Datenaustausch mit Dienstgebern (DM)“ ist erforderlich.
    </p>

  </div>
</details>

## MW1828

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW1828 - Belegung Referenzwert der VSNR-Anforderung / Versicherungsnummer in der mBGM fehlerhaft (Bestand: @1, mBGM-Referenzwert: @2, Satzlaufnummer: @3). Die mBGM wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Ordnungsbegriff Ursprung<br>
      @2: Referenzwert der mBGM<br>
      @3: Satzlaufnummer
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Der Referenzwert der VSNR-Anforderung ist in der mBGM zwingend zu befüllen, wenn keine VSNR angegeben ist.
    </p>

    <p>
      Wenn keine VSNR bekannt ist, ist das Feld Referenzwert der VSNR-Anforderung zwingend zu befüllen und das Feld VSNR leer zu belassen.
    </p>

    <p>
      Es ist entweder das Feld Referenzwert der VSNR-Anforderung oder das Feld VSNR zu befüllen.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung der mBGM mit Angabe der VSNR ist erforderlich. Das Feld Referenzwert der VSNR-Anforderung ist frei zu belassen.
    </p>

  </div>
</details>

## MW1830

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW1830 - Der Referenzwert der mBGM @2 und/oder der ursprünglichen Meldung @3 fehlt (Bestand: @1, Satzlaufnummer: @4, Satzart: @5). Die mBGM wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Ordnungsbegriff Ursprung<br>
      @2: Referenzwert der mBGM<br>
      @3: Referenzwert der ursprünglichen Meldung der mBGM<br>
      @4: Satzlaufnummer<br>
      @5: Satzart der mBGM
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      In der Storno-mBGM wurde kein Referenzwert der ursprünglichen Meldung angegeben.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung der Storno-mBGM mit Angabe des Referenzwertes der ursprünglichen Meldung ist erforderlich.
    </p>

  </div>
</details>

## MW1864

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW1864 - Die mBGM wurde nicht verarbeitet, da im Feld @1 der Satzart @2 keine Daten angegeben wurden.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Feldbezeichnung<br>
      @2: Satzart der mBGM
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es wurde ein mBGM-Paket übermittelt ohne Angabe einer Beitragskontonummer.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung mit Angabe der Beitragskontonummer ist erforderlich.
    </p>

  </div>
</details>

## MW1865

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW1865 - Die mBGM wurde nicht verarbeitet, da der angegebene Wert @1 für das Feld @2 entspricht nicht den Formatvorschriften der mBGM-Satzart @3.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Wert des Feldes<br>
      @2: Feldbezeichnung<br>
      @3: Satzart der mBGM
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Der Beginn der Verrechnung wurde in der übermittelten mBGM nicht oder mit 0 befüllt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung der mBGM mit Angabe des Beginnes der Verrechnung ist erforderlich.
    </p>

  </div>
</details>

## MW2022

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    MW2022 - Der @3 mit der @2 @1 ist im System der Sozialversicherung unbekannt. Bitte um Storno und Neumeldung mit der korrekten @2.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Partneridentifikation<br>
      @2: „Beitragskontonummer“ oder „Versicherungsnummer“ in Abhängigkeit von @3<br>
      @3: Partnerart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u>
    </p>

    <p>
      <strong>Beispiel 1:</strong><br>
      Das übermittelte mBGM-Paket wurde mit einer Beitragskontonummer übermittelt, welche der ÖGK nicht bekannt ist.
    </p>

    <p>
      <strong>Beispiel 2:</strong><br>
      Die übermittelte mBGM wurde mit einer Versicherungsnummer übermittelt, welche der ÖGK nicht bekannt ist. Sollte bereits eine VSNR-Anforderung übermittelt worden sein, ist eine Kontrolle in den nächsten Tagen empfehlenswert.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Das mBGM-Paket ist unter Angabe einer korrekten Beitragskontonummer neu zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Versicherungsnummer sind erforderlich.
    </p>

  </div>
</details>

## VW1403

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1403 - Die Betriebliche Vorsorge ist zu prüfen, da die Beschäftigung nicht länger als einen Monat gedauert hat.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine Richtigstellung der Anmeldung ist zu übermitteln, sofern das Anmeldedatum nicht korrekt war.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine Richtigstellung der Abmeldung ist zu übermitteln, sofern das Abmeldedatum nicht korrekt war.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine Richtigstellung der Anmeldung ohne Angabe der Betrieblichen Vorsorge ist zu übermitteln, sofern die Beschäftigung nicht länger als einen Monat gedauert hat (BV-Freimonatsregelung beachten).
    </p>

  </div>
</details>

## VW1516

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1516 - Die Angabe der Tage der fallweisen Beschäftigung ist fehlerhaft (mehrfache Angabe von Tagen oder ungültiges Datum).
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungstyp<br>
      @2: Versicherter Name
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      In der übermittelten fallweisen mBGM wurde dasselbe Datum mehrfach angegeben.
    </p>

    <p>
      Alternativ wurde ein Datum angeführt, welches fachlich nicht korrekt ist.
    </p>

    <p>
      <strong>Beispiel:</strong> In der mBGM für Februar wird als Beschäftigungstag der 30. angegeben.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Beschäftigungstage sind erforderlich.
    </p>

  </div>
</details>

## VW1536

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1536 - Eine Kündigungsentschädigung bzw. Urlaubsersatzleistung ist zu einer betrieblichen Vorsorgezeit nicht möglich. Die Meldung wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung der Abmeldung, in welcher „Entgeltanspruch Ende“ und „Betriebliche Vorsorge Ende“ mit dem Ende der Urlaubsersatzleistung ident sind, sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung ohne Angabe einer Kündigungsentschädigug bzw. Urlaubsersatzleistung sind erforderlich, sofern nur eine Zeit zur Betrieblichen Vorsorge vorliegt.
    </p>

  </div>
</details>

## VW1540

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1540 - Die Richtigstellung der @1 über eine Abmeldung hinaus ist nicht möglich und wurde daher nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: SV-Anmeldung oder BV-Anmeldung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Wurde das Dienstverhältnis bereits beendet, kann in gewissen Konstellationen eine Richtigstellung Anmeldung nicht erfasst werden.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Das Versicherungsverhältnis liegt vom 01.05. bis 15.06. auf.
    </p>

    <p>
      Bei der ursprünglichen Anmeldung und bei der Abmeldung wurde keine Betriebliche Vorsorge angegeben.
    </p>

    <p>
      Die Richtigstellung Anmeldung mit Beginn der Betrieblichen Vorsorge ab 01.06. kann auf Grund der bereits erfassten Abmeldung per 15.06. nicht verarbeitet werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Übermittlung einer Änderungsmeldung mit Betrieblicher Vorsorge vom 01.06. bis 15.06. (im Beispielfall) ist erforderlich.
    </p>

  </div>
</details>

## VW1541

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1541 - Die Richtigstellung der Versicherung fällt in die @1 und wurde daher nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Kündigungsentschädigung oder Urlaubsersatzleistung
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Der Versicherungsverlauf ist im DG-Dashboard zu überprüfen und gegebenenfalls durch ein Storno und eine neuerliche An- oder Abmeldung zu berichtigen.
    </p>

  </div>
</details>

## VW1543

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1543 - Die Richtigstellung der Anmeldung wurde nicht verarbeitet, da der Beginn der Betrieblichen Vorsorge vor dem richtiggestellten Anmeldedatum liegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno Anmeldung für die übermittelte Richtigstellung der Anmeldung (Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Anmeldung) ist erforderlich.
    </p>

    <p>
      Eine Neuübermittlung mit Angabe der korrekten Anmeldedaten ist erforderlich.
    </p>

  </div>
</details>

## VW1560

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1560 - Die Richtigstellung der Abmeldung kann keiner Abmeldung zugeordnet werden und wurde daher nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno Abmeldung für die übermittelte Richtigstellung der Abmeldung (Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Abmeldung) ist erforderlich.
    </p>

    <p>
      Eine Neuübermittlung mit Angabe der korrekten Abmeldedaten ist erforderlich.
    </p>

  </div>
</details>

## VW1563

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1563 - Die Richtigstellung der @1 wurde nicht verarbeitet, da sie einer für diesen Zeitraum erstatteten Abmeldung widerspricht.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: SV oder BV
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Ein Storno der Richtigstellung und eine Neuübermittlung einer Richtigstellung mit Angabe der korrekten Daten sind erforderlich.
    </p>

  </div>
</details>

## VW1705

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1705 - Die Meldung verkürzt bzw. storniert eine Versicherungszeit in einem Teilentgeltzeitraum.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Mit dem zuständigen Kundenservicecenter ist die korrekte Entgeltfortzahlung abzuklären und mittels Arbeits- und Entgeltbestätigung zu melden.
    </p>

    <p>
      Die Abmeldung muss mit der Arbeits- und Entgeltbestätigung übereinstimmen.
    </p>

    <p>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Angabe der korrekten Abmeldedaten sind erforderlich.
    </p>

  </div>
</details>

## VW1750

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1750 - Der Beginn der Betrieblichen Vorsorge liegt @1 als einen Monat nach dem Anmeldedatum zur Sozialversicherung.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: mehr/weniger
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine Richtigstellung der Anmeldung mit Angabe des korrekten Beginnes der Betrieblichen Vorsorge ist erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Angabe der Betrieblichen Vorsorge ist korrekt, da es sich zum Beispiel um eine Ummeldung handelt.
    </p>

    <p>
      Dies ist der ÖGK bekannt zu geben, damit die Rückfrage abgeschlossen werden kann.
    </p>

  </div>
</details>

## VW1755

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1755 - Der Beginn der Betrieblichen Vorsorge ist nicht ident mit jenem der Sozialversicherung, obwohl der Dienstnehmer innerhalb der letzten 12 Monate bereits einmal beschäftigt war.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine Richtigstellung der Anmeldung mit Angabe des korrekten Beginnes der Betrieblichen Vorsorge ist erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Angabe der Betrieblichen Vorsorge ist korrekt, da es sich zum Beispiel um eine Ummeldung handelt.
    </p>

    <p>
      Dies ist der ÖGK bekannt zu geben, damit die Rückfrage abgeschlossen werden kann.
    </p>

  </div>
</details>

## VW1774

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1774 - Die @2 wurde nicht verarbeitet, da das Beitragskonto @1 für die Abrechnung von Freien Dienstnehmern vorgesehen ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Beitragskontonummer<br>
      @2: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Dieses Beitragskonto ist nur für die Abrechnung von freien Dienstnehmern gemäß § 4 Abs. 4 ASVG vorgesehen.
    </p>

    <p>
      Daher können Dienstnehmer, welche nicht dem § 4 Abs. 4 ASVG unterliegen, auf diesem Beitragskonto nicht gemeldet und abgerechnet werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Stornomeldung und eine Neuübermittlung mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Stornomeldung und eine Neuübermittlung mit Angabe der korrekten Beitragskontonummer sind erforderlich.
    </p>

  </div>
</details>

## VW1775

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1775 - Die @2 wurde nicht verarbeitet, da das Beitragskonto @1 nicht für die Abrechnung von Freien Dienstnehmern vorgesehen ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Beitragskontonummer<br>
      @2: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Dieses Beitragskonto ist nicht für die Abrechnung von freien Dienstnehmern gemäß § 4 Abs. 4 ASVG vorgesehen.
    </p>

    <p>
      Daher können Dienstnehmer, welche dem § 4 Abs. 4 ASVG unterliegen, auf diesem Beitragskonto nicht gemeldet und abgerechnet werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Stornomeldung und eine Neuübermittlung mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Stornomeldung und eine Neuübermittlung mit Angabe der korrekten Beitragskontonummer sind erforderlich.
    </p>

  </div>
</details>

## VW1795

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1795 - Das gemeldete Ende der Beschäftigung fällt in eine FHK/PFK. Es ist entweder eine Abmeldung der FHK/PFK ausständig oder eine Richtigstellung der Abmeldung erforderlich.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine entsprechende Abmeldung ist zu übermitteln, sofern die Familienhospizkarenz bzw. Pflegekarenz noch nicht beendet wurde.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Abmeldung und eine Neuübermittelung mit Angabe der korrekten Abmeldedaten sind erforderlich, sofern die Daten in der ursprünglichen Meldung nicht korrekt sind.
    </p>

  </div>
</details>

## VW1851

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1851 - Eine @1 ist nur @2 @3 möglich und wurde daher nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart<br>
      @2: „ab“ oder „bis“<br>
      @3: Zum Beispiel „31.12.2018“ oder „01.01.2019“ (mBGM-Stichtag), zutreffender Wert wird vom Programm gesetzt
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Versichertenmeldungen ab 01.01.2019 sind mit der korrekten Satzart „Meldung PFV reduziert“ zu übermitteln.
    </p>

    <p>
      Hierfür sind auch die Angaben der SV und BV zu beachten.
    </p>

    <p>
      Sollte in den Datenfeldern ein Datum vor 01.01.2019 angegeben worden sein, sind diese zu überprüfen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die übermittelte Meldung sowie deren Inhalt sind zu überprüfen.
    </p>

    <p>
      Eine Stornomeldung und eine Neuübermittlung der korrekten Satzart sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die übermittelte Meldung sowie deren Inhalt sind zu überprüfen.
    </p>

    <p>
      Eine Stornomeldung und eine Neuübermittlung mit Angabe der korrekten Daten (zum Beispiel Anmeldedatum) sind erforderlich.
    </p>

  </div>
</details>

## VW1852

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1852 - Die @1 wurde nicht verarbeitet, da für das angegebene Beitragskonto der Beschäftigungsbereich @2 nicht zulässig ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart<br>
      @2: Beschäftigungsbereich
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Eine falsche Tarifgruppe wurde bei der Anmeldung oder Änderungsmeldung angegeben.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Anmeldung und Neuübermittlung mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Bei Übermittlung einer falschen Änderungsmeldung ist mit der ÖGK Kontakt aufzunehmen, damit die Rückfrage behoben werden kann.
    </p>

  </div>
</details>

## VW1853

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1853 - Die @1 wurde nicht verarbeitet, da die Kombination @2 mit geringfügiger Beschäftigung nicht zulässig ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart<br>
      @2: Beschäftigungsbereich
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Der Dienstgeber übermittelt eine Anmeldung für den Dienstnehmer mit dem Beschäftigungsbereich „Angestelltenlehrlinge“, wobei das Auswahlfeld „geringfügig“ auf der Anmeldung mit „Ja“ gekennzeichnet ist.
    </p>

    <p>
      Diese Kombination ist nicht zulässig.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Anmeldung und Neuübermittlung mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Anmeldung und Neuübermittlung ohne Angabe von „Ja“ im Auswahlfeld „geringfügig“ sind erforderlich.
    </p>

  </div>
</details>

## VW1854

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1854 - Die @1 wurde nicht verarbeitet, da die Kombination @2 mit freier Dienstvertrag nicht zulässig ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart<br>
      @2: Beschäftigungsbereich
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      <strong>Beispiel:</strong><br>
      Der Dienstgeber übermittelt eine Anmeldung für den Dienstnehmer mit dem Beschäftigungsbereich „Angestelltenlehrlinge“, wobei das Auswahlfeld „freier Dienstvertrag“ auf der Anmeldung mit „Ja“ gekennzeichnet ist.
    </p>

    <p>
      Diese Kombination ist nicht zulässig.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Anmeldung und Neuübermittlung mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Anmeldung und Neuübermittlung ohne Angabe von „Ja“ im Auswahlfeld „freier Dienstvertrag“ sind erforderlich.
    </p>

  </div>
</details>

## VW1868

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1868 - Die @1 wurde nicht verarbeitet, da die Beschäftigungsdauer bei Beschäftigungsfolge „kurze Beschäftigung“ kürzer als einen Monat sein muss.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      <strong>Beispiel 1:</strong><br>
      Der Dienstgeber hat der ÖGK für seine Dienstnehmerin bereits eine An- und Abmeldung mit der Beschäftigungsfolge „kurze Beschäftigung“ übermittelt.
    </p>

    <p>
      Anmeldedatum: 15.01.2026<br>
      Ende Beschäftigung: 13.02.2026
    </p>

    <p>
      Der Dienstgeber übermittelt eine Richtigstellung Abmeldung mit Ende der Beschäftigung am 18.02.2026.
    </p>

    <p>
      Die Prüfung ergibt, dass die Beschäftigung länger als einen Monat dauert.
    </p>

    <p>
      <strong>Beispiel 2:</strong><br>
      Angemeldet wurde die Dienstnehmerin mit 01.04.2026 und als Beschäftigungsfolge ist „kurze Beschäftigung“ gespeichert (durch Übermittlung/Verarbeitung einer mBGM für kürzer als einen Monat vereinbarte Beschäftigung für 04/2026).
    </p>

    <p>
      Der Dienstgeber übermittelt eine Abmeldung mit Ende der Beschäftigung am 25.06.2026 und dem Abmeldegrund „Einvernehmliche Lösung“.
    </p>

    <p>
      Da die Beschäftigung einen Monat bzw. länger gedauert hat, wird die Rückfrage angelegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno-mBGM und Neuübermittlung einer mBGM (für den Regelfall) sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist zu überprüfen. Sofern das An- oder Abmeldedatum nicht korrekt ist, ist eine Richtigstellung Anmeldung/Richtigstellung Abmeldung erforderlich.
    </p>

  </div>
</details>

## VW1885

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1885 - Die @1 wurde nicht verarbeitet, da eine Änderung auf geringfügige Beschäftigung während einer Teilentgeltzeit nicht möglich ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      <strong>Beispiel:</strong><br>
      Der Dienstgeber übermittelt für den vollbeschäftigten Dienstnehmer eine mBGM mit der Tarifgruppe „Geringfügig beschäftigter Arbeiter“.
    </p>

    <p>
      Da für den Dienstnehmer im Zeitraum vom 01.04.2026 bis 30.04.2026 eine Teilentgeltzeit vorhanden ist, wird die Rückfrage angelegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

  </div>
</details>

## VW1886

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1886 - Die Änderungsmeldung wurde nicht verarbeitet, da das Änderung-Bis Datum vor dem Änderung-Ab Datum liegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      <strong>Beispiel:</strong><br>
      Der Dienstgeber übermittelt eine Änderungsmeldung mit „Änderung ab“ 01.03.2026 sowie „Änderung bis“ 28.02.2026.
    </p>

    <p>
      Da das „Änderung bis“-Datum zeitlich vor dem „Änderung ab“-Datum liegt, wird die Rückfrage angelegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Neuübermittlung der Änderungsmeldung mit Angabe des korrekten Änderungsdatums ist erforderlich.
    </p>

    <p>
      Die Kontaktaufnahme mit der ÖGK ist erforderlich, um die Rückfrage zu beheben.
    </p>

  </div>
</details>

## VW1907

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1907 - Der Beginn der betrieblichen Vorsorge ist nicht ident mit jenem der Sozialversicherungszeit.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die übermittelte Anmeldung ist zu stornieren und eine Neuübermittlung mit Angabe des korrekten Beginnes der Betrieblichen Vorsorge erforderlich.
    </p>

  </div>
</details>

## VW1909

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1909 - Der Beginn der betrieblichen Vorsorge ist ident mit jenem der Sozialversicherung, obwohl der Dienstnehmer innerhalb der letzten 12 Monate nicht beschäftigt war.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Richtigstellung der Anmeldung unter Berücksichtigung des beitragsfreien Monates in der Betrieblichen Vorsorge ist erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Handelt es sich um eine Ummeldung von einem anderen Beitragskonto, bei dem die Pflicht zur Betrieblichen Vorsorge bereits gegeben war, ist die Kontaktaufnahme mit der ÖGK erforderlich, um die Rückfrage zu beheben.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Handelt es sich um eine Anmeldung, welche auf eine fallweise Beschäftigung folgt, für welche noch keine mBGM erstattet wurde, ist die Kontaktaufnahme mit der ÖGK erforderlich.
    </p>

  </div>
</details>

## VW1925

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1925 - Für einen von der Änderungsmeldung betroffenen Beitragszeitraum wurde bereits eine mBGM verbucht. Diese Änderungsmeldung ist daher nicht zulässig.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn eine Änderungsmeldung für einen Beitragszeitraum übermittelt wurde, für welchen bereits eine mBGM verarbeitet wurde.
    </p>

    <p>
      Die vom Dienstgeber übermittelte Änderungsmeldung ist zu diesem Zeitpunkt nicht zulässig.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno-mBGM und eine Neuübermittlung der mBGM mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      Die Kontaktaufnahme mit der ÖGK ist erforderlich, um die Rückfrage zu erledigen, da eine Änderungsmeldung nicht storniert werden kann.
    </p>

  </div>
</details>

## VW1929

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1929 - Bei Änderungen im Bereich SV sind folgende Felder verpflichtend gemeinsam anzugeben: „Beschäftigungsbereich“, „Geringfügigkeit“, „Freier Dienstvertrag“. Die Änderungsmeldung wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn auf einer Änderungsmeldung mindestens eines der Felder „Beschäftigungsbereich“, „Geringfügigkeit“ und „Freier Dienstvertrag“ einen Wert enthält, aber nicht alle drei Felder mit Werten befüllt sind.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Ein Dienstnehmer wurde mit 01.02.2026 als geringfügig beschäftigter Arbeiter angemeldet. Ab 01.04.2026 wird eine Erhöhung der Arbeitszeit vereinbart, die zu einer Überschreitung der Geringfügigkeitsgrenze und damit zur Vollversicherung führt.
    </p>

    <p>
      Daher ist eine Änderungsmeldung mit folgenden Daten nicht zulässig: „Beschäftigungsbereich“ = leer, „Geringfügigkeit“ = „N“, „Freier Dienstvertrag“ = leer
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Änderungsmeldung mit Angabe der korrekten Daten ist erforderlich.
    </p>

    <p>
      Bei keiner Änderung ist das Feld „keine Änderung“ auszuwählen.
    </p>

    <p>
      Die Kontaktaufnahme mit der ÖGK ist erforderlich, um die Rückfrage zu beheben.
    </p>

  </div>
</details>

## VW1931

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1931 - Die @1 kann nicht verarbeitet werden, da eine weitere konkurrierende Beschäftigung gespeichert ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn sich der gemeldete Beschäftigungszeitraum mit einer bereits bestehenden Beschäftigung beim selben Dienstgeber zeitlich überschneidet.
    </p>

    <p>
      <strong>Beispiel 1:</strong><br>
      Mit einer mBGM für fallweise Beschäftigte werden die Beschäftigungstage „12“ und „17“ für den Beitragszeitraum 03/2026 gemeldet.
    </p>

    <p>
      Es existiert bereits eine regelmäßige Beschäftigung beim selben Dienstgeber seit 01.01.2026 (laufend).
    </p>

    <p>
      <strong>Beispiel 2:</strong><br>
      Der Dienstgeber übermittelt für den Dienstnehmer eine Anmeldung per 01.03.2026. Es liegt bereits eine Anmeldung per 01.02.2026 vor.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Bei Überschneidung einer fallweisen Beschäftigung mit einer regelmäßigen Beschäftigung ist die Kontaktaufnahme mit der ÖGK erforderlich, um die Rückfrage zu beheben.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Bestehen tatsächlich zwei überschneidende Beschäftigungen, ist die Kontaktaufnahme mit der ÖGK erforderlich, um die Rückfrage zu beheben.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Eine Storno Anmeldung für die falsche Anmeldung ist erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 4:</u><br>
      Eine Abmeldung ist zu übermitteln, sofern diese fehlt.
    </p>

  </div>
</details>

## VW1935

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1935 - Die Betriebliche Vorsorge ab @1 ist nicht möglich. Die Anmeldung zur Betrieblichen Vorsorge wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: BV-Beitrag ab
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es ist zu prüfen, ob auf der übermittelten Meldung der richtige Beschäftigungsbereich in Kombination mit der Pflicht zur Betrieblichen Vorsorge angegeben wurde.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Wurde eine Anmeldung übermittelt, ist diese zu stornieren und eine neuerliche Anmeldung erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Wurde eine Änderungsmeldung übermittelt, sind eine korrekte Änderungsmeldung und die Kontaktaufnahme mit der ÖGK erforderlich, um die Rückfrage zu beheben.
    </p>

  </div>
</details>

## VW1936

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1936 - Die Betriebliche Vorsorge ab @1 ist nicht möglich. Die Anmeldung wurde ohne Betriebliche Vorsorge Zeit gespeichert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: BV-Beitrag ab
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es ist zu prüfen, ob auf der übermittelten Meldung der richtige Beschäftigungsbereich in Kombination mit der Pflicht zur Betrieblichen Vorsorge angegeben wurde.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Wurde eine Anmeldung übermittelt, ist eine Richtigstellung der Anmeldung erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Wurde eine Änderungsmeldung übermittelt, sind eine korrekte Änderungsmeldung und die Kontaktaufnahme mit der ÖGK erforderlich, um die Rückfrage zu beheben.
    </p>

  </div>
</details>

## VW1941

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1941 - Bitte um Überprüfung der @1, da das Ende des Entgeltanspruches vor dem Ende der Beschäftigung liegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Bei diversen Abmeldegründen besteht die Möglichkeit, dass seitens der Dienstgeberin bzw. des Dienstgebers die Entgeltzahlung an die versicherte Person vorzeitig eingestellt wurde. Die Rückmeldung kann in diesem Fall als Hinweis betrachtet werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Abmeldung ist im Zusammenhang mit einer Krankengeld-Einstufung nicht korrekt: 
    </p>

    <p>
      Es ist mit dem zuständigen Kundenservicecenter die korrekte Entgeltfortzahlung abzuklären und mittels Arbeits- und Entgeltbestätigung zu melden. Die Abmeldung muss mit der Arbeits- und Entgeltbestätigung übereinstimmen.
    </p>

    <p>
      Ist die Abmeldung nicht korrekt, ist eine Richtigstellung der Abmeldung mit Angabe der korrekten Abmeldedaten erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Wird bei „karenzierten“ Beschäftigungen (zum Beispiel Bildungskarenz, Präsenzdienst, Karenz nach MSchG/VKG, unbezahlter Urlaub, SV-Ende – Beschäftigung aufrecht etc.) nur das arbeitsrechtliche Ende mittels Richtigstellung Abmeldung nachgemeldet, kann die Rückfrage ebenfalls als Hinweis betrachtet werden.
    </p>

  </div>
</details>

## VW1942

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1942 - Die @1 wurde nicht verarbeitet, da keine Zeit der Betrieblichen Vorsorge gespeichert ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Meldung wurde nicht verarbeitet, da keine entsprechende Zeit zur Betrieblichen Vorsorge für den Beitragszeitraum gespeichert ist.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Richtigstellung der Anmeldung mit Betrieblicher Vorsorge ist zu übermitteln, sofern die Angabe zur Betrieblichen Vorsorge auf der Anmeldung gefehlt hat.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Abmeldung und eine Neuübermittlung ohne Ende der Betrieblichen Vorsorge sind erforderlich, sofern keine Pflicht zur Betrieblichen Vorsorge besteht.
    </p>

  </div>
</details>

## VW1943

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1943 - Die @2 wurde nicht verarbeitet, da beim Abmeldegrund @1 kein Ende der Betrieblichen Vorsorge zulässig ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Abmeldegrund<br>
      @2: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      <strong>Beispiel:</strong><br>
      Vom Dienstgeber wird eine Abmeldung mit Abmeldedatum 20.02.2026 („Entgeltanspruch Ende“, „Betriebliche Vorsorge Ende“) und dem Abmeldegrund „Zivildienst“ übermittelt.
    </p>

    <p>
      Bei den folgenden Abmeldegründen ist jedoch kein Ende der Betrieblichen Vorsorge zulässig:<br>
      • Präsenzdienstleistung im Bundesheer<br>
      • Truppenübung<br>
      • Zivildienst
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Abmeldung und eine Neuübermittlung ohne Angabe des Endes der Betrieblichen Vorsorge sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Abmeldung und eine Neuübermittlung mit korrektem Abmeldegrund sind erforderlich.
    </p>

  </div>
</details>

## VW1944

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1944 - @4 @2 ist in Kombination mit @3 nicht zulässig. Die @1 wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart<br>
      @2: Tarifgruppe/Beschäftigungsbereich<br>
      @3: Beitragsfalltyp<br>
      @4: „Die Tarifgruppe“/“Der Beschäftigungsbereich“
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Da mit der Meldeschiene nicht nur Meldungen zur unselbständigen Erwerbstätigkeit verarbeitet werden, muss geprüft werden, dass für die anderen Versicherungsumstände keine Lehre gemeldet wird.
    </p>

    <p>
      Wird für andere Versicherungsumstände eine Tarifgruppe bzw. ein Beschäftigungsbereich für Lehrlinge gemeldet, kommt es zur angegebenen Rückfrage.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Eine Anmeldung wird übermittelt.
    </p>

    <p>
      Als Beschäftigungsbereich ist „Arbeiter-Lehrling“ angegeben. Das gemeldete Beitragskonto hat einen Beitragsfall vom Typ „Zivildienst“ zugeordnet.
    </p>

    <p>
      Da eine Lehre für den Versicherungsumstand „Zivildienst“ nicht möglich ist, wird die Rückfrage angelegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Anmeldung und Neuübermittlung mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Anmeldung und Neuübermittlung mit Angabe der korrekten Beitragskontonummer sind erforderlich.
    </p>

  </div>
</details>

## VW1945

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1945 - Die @1 wurde nicht verarbeitet, da bereits eine Abmeldung vorliegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      <strong>Beispiel:</strong> 
    </p>

    <p>
      Eine Abmeldung für 21.07.2026 wird übermittelt.
    </p>

    <p>
      Es liegt bereits eine Abmeldung per 15.07.2026 vor.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Abmeldung für die falsche Abmeldung ist erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Anmeldung ist erforderlich, sofern zwischen den beiden gemeldeten Abmeldedaten eine Anmeldung fehlt.
    </p>

  </div>
</details>

## VW1946

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1946 - Die @1 wurde nicht verarbeitet, da sich die Zeit der Kündigungsentschädigung mit dem Ende der Beschäftigung überschneidet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Ein Ende der Beschäftigung, welches mit dem Beginn der Kündigungsentschädigung ident ist, ist nicht zulässig.
    </p>

    <p>
      Das Ende der Beschäftigung hat einen Tag vor dem Beginn der Kündigungsentschädigung zu liegen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Ende der Beschäftigung vor Beginn der Kündigungsentschädigung sind erforderlich.
    </p>

  </div>
</details>

## VW1947

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1947 - Die @1 wurde nicht verarbeitet, da sich die Zeit der Urlaubsersatzleistung mit dem Ende der Beschäftigung überschneidet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Ein Ende der Beschäftigung, welches mit dem Beginn der Urlaubsersatzleistung ident ist, ist nicht zulässig.
    </p>

    <p>
      Das Ende der Beschäftigung hat einen Tag vor dem Beginn der Urlaubsersatzleistung zu liegen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Ende der Beschäftigung vor Beginn der Urlaubsersatzleistung sind erforderlich.
    </p>

  </div>
</details>

## VW1948

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1948 - Die Kündigungsentschädigung ist bei der vorliegenden Versicherung (@1) nicht möglich.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Personengruppe/Tarifgruppe
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der mBGM und eine Neuübermittlung mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung ohne Angabe der Kündigungsentschädigung sind erforderlich.
    </p>

  </div>
</details>

## VW1949

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1949 - Die Urlaubsersatzleistung ist bei der vorliegenden Versicherung (@1) nicht möglich.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Personengruppe/Tarifgruppe
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der mBGM und eine Neuübermittlung mit Angabe der korrekten Tarifgruppe sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung ohne Angabe der Urlaubsersatzleistung sind erforderlich.
    </p>

  </div>
</details>

## VW1950

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1950 - Die @1 wurde nicht verarbeitet, da bereits eine laufende Betriebliche Vorsorge besteht.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es liegt eine Beschäftigung vor, welche durch Präsenzdienst/Zivildienst/Truppenübung unterbrochen wurde. Die Betriebliche Vorsorge ist daher laufend gespeichert.
    </p>

    <p>
      Bei Wiedereintritt hat die Anmeldung ohne Angabe des Beginnes der Betrieblichen Vorsorge zu erfolgen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Anmeldung und eine Neuübermittlung ohne Angabe des Beginnes der Betrieblichen Vorsorge sind erforderlich, sofern die Zeit zur Betrieblichen Vorsorge bereits laufend gespeichert ist.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Kontaktaufnahme mit der ÖGK ist erforderlich, sofern tatsächlich eine parallele Zeit zur bereits bestehenden Zeit zur Betrieblichen Vorsorge vorliegt.
    </p>

  </div>
</details>

## VW1951

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1951 - Die Richtigstellung der Anmeldung wurde ohne Beginn der Betrieblichen Vorsorge gemeldet, daher wurde die Betriebliche Vorsorge storniert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen.
    </p>

    <p>
      Die Rückfrage dient als Hinweis, sofern die Zeit zur Betrieblichen Vorsorge tatsächlich storniert werden sollte.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen.
    </p>

    <p>
      Eine Richtigstellung der Anmeldung mit Angabe des Beginnes der Betrieblichen Vorsorge ist erforderlich.
    </p>

  </div>
</details>

## VW1952

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1952 - Die @1 wurde nicht verarbeitet, da das Beschäftigungsende vor dem Beschäftigungsbeginn liegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Angabe des korrekten Abmeldedatums sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine Richtigstellung der Anmeldung mit Angabe des korrekten Anmeldedatums ist erforderlich.
    </p>

  </div>
</details>

## VW1953

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1953 - Das Richtigstellungsdatum der Abmeldung liegt vor dem Anmeldedatum (@1). Die Richtigstellung der Abmeldung wurde nicht verarbeitet.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Anmeldedatum
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Abmeldung für die übermittelte Richtigstellung der Abmeldung (Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Abmeldung) ist erforderlich.
    </p>

    <p>
      Eine Neuübermittlung mit Angabe der korrekten Abmeldedaten ist erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Richtigstelllung der Anmeldung mit Angabe des korrekten Anmeldedatums ist erforderlich.
    </p>

  </div>
</details>

## VW1954

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1954 - Die @1 wurde nicht verarbeitet, da das Ende der Beschäftigung vor der Kündigungsentschädigung bzw. Urlaubsersatzleistung und das Ende des Entgeltanspruches nach dem Ende der Beschäftigung liegen muss.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Ein Ende der Beschäftigung, welches mit dem Beginn der Kündigungsentschädigung ident ist oder nach dem Beginn der Kündigungsentschädigung bzw. Urlaubsersatzleistung liegt, ist nicht zulässig.
    </p>

    <p>
      Das Ende der Beschäftigung hat einen Tag vor dem Beginn der Kündigungsentschädigung bzw. Urlaubsersatzleistung zu liegen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Ende der Beschäftigung vor Beginn der Kündigungsentschädigung bzw. Urlaubsersatzleistung sind erforderlich.
    </p>

  </div>
</details>

## VW1956

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1956 - Die @1 wurde nicht verarbeitet, da der 31.12.9999 kein gültiges Datum ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es wurde ein ungültiges oder unvollständiges Datum in der Meldung angegeben.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Meldung und eine Neuübermittlung mit Angabe des korrekten Datums sind erforderlich.
    </p>

  </div>
</details>

## VW1960

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1960 - Die @1 wurde nicht verarbeitet, da keine Anmeldung vorliegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Wenn eine Meldung einen Zeitraum betrifft, für den keine Anmeldung vorliegt, so wird für alle weiteren Meldungen dazu die Rückfrage angelegt.
    </p>

    <p>
      <strong>Beispiel 1:</strong><br>
      Eine Richtigstellung Anmeldung wird vom Dienstgeber übermittelt. Das Anmeldedatum ist mit 17.03.2026 belegt, das Feld für das richtige Anmeldedatum mit 20.03.2026. Es liegt jedoch keine ursprüngliche Meldung mit 17.03.2026 auf.
    </p>

    <p>
      <strong>Beispiel 2:</strong><br>
      Der Dienstgeber übermittelt eine Abmeldung. Zum angegebenen Abmeldedatum 01.02.2026 liegen keine Versicherungsdaten vor.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen und die entsprechenden Meldungen sind zu übermitteln.
    </p>

    <p>
      Eine Storno Anmeldung für die übermittelte Richtigstellung der Anmeldung (Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Anmeldung) ist erforderlich.
    </p>

    <p>
      Eine Neuübermittlung mit Angabe der korrekten Anmeldedaten ist erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Anmeldung ist zu übermitteln.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Eine Storno Abmeldung ist zu übermitteln.
    </p>

  </div>
</details>

## VW1961

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1961 - Die @1 wurde nicht verarbeitet, da eine Kündigungsentschädigung ohne Ende Beschäftigung nicht möglich ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Eine Kündigungsentschädigung kann nur in Kombination mit einem Abmeldegrund mit arbeitsrechtlichem Ende gemeldet werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Angabe eines Abmeldegrundes mit arbeitsrechtlichem Ende sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung ohne Angabe der Kündigungsentschädigung sind erforderlich.
    </p>

  </div>
</details>

## VW1962

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1962 - Die @1 wurde nicht verarbeitet, da eine Urlaubsersatzleistung ohne Ende Beschäftigung nicht möglich ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Eine Urlaubsersatzleistung kann nur in Kombination mit einem Abmeldegrund mit arbeitsrechtlichem Ende gemeldet werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Angabe eines Abmeldegrundes mit arbeitsrechtlichem Ende sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung ohne Angabe der Urlaubsersatzleistung sind erforderlich.
    </p>

  </div>
</details>

## VW1963

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1963 - Die @2 wurde nicht verarbeitet, da der Abmeldegrund @1 nur bei arbeitsrechtlichem Ende der Beschäftigung möglich ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Abmeldegrund<br>
      @2: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Der gemeldete Abmeldegrund kann nur in Kombination mit einem arbeitsrechtlichen Ende gemeldet werden.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Angabe eines arbeitsrechtlichen Endes sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Angabe eines anderen Abmeldegrundes, welcher kein arbeitsrechtliches Ende vorsieht, sind erforderlich.
    </p>

  </div>
</details>

## VW1964

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1964 - Die @1 wurde nicht verarbeitet, da das Ende des Entgeltanspruches und das Ende der Beschäftigung bei einer Kündigungsentschädigung nicht gleich belegt sein dürfen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Ein Ende der Beschäftigung, welches mit dem Ende des Entgeltanspruches ident ist, ist bei einer Kündigungsentschädigung nicht zulässig.
    </p>

    <p>
      Das Ende der Beschäftigung hat einen Tag vor dem Beginn der Kündigungsentschädigung zu liegen.
    </p>

    <p>
      Das Ende des Entgeltanspruches ist dem Ende der Kündigungsentschädigung gleichzusetzen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Ende der Beschäftigung vor Beginn der Kündigungsentschädigung sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit einem Ende des Entgeltanspruches, welches dem Ende der Kündigungsentschädigung gleicht, sind erforderlich.
    </p>

  </div>
</details>

## VW1965

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1965 - Die @1 wurde nicht verarbeitet, da das Ende des Entgeltanspruches und das Ende der Beschäftigung bei einer Urlaubsersatzleistung nicht gleich belegt sein dürfen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Ein Ende der Beschäftigung, welches mit dem Ende des Entgeltanspruches ident ist, ist bei einer Urlaubsersatzleistung nicht zulässig.
    </p>

    <p>
      Das Ende der Beschäftigung hat einen Tag vor dem Beginn der Urlaubsersatzleistung zu liegen.
    </p>

    <p>
      Das Ende des Entgeltanspruches ist dem Ende der Urlaubsersatzleistung gleichzusetzen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Ende der Beschäftigung vor Beginn der Urlaubsersatzleistung sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit einem Ende des Entgeltanspruches, welches dem Ende der Urlaubsersatzleistung gleicht, sind erforderlich.
    </p>

  </div>
</details>

## VW1966

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1966 - Sofern keine Ausleistung des Krankengeldbezuges vorliegt, muss für die Zeit zwischen Ende Beschäftigung und Ende des Entgeltanspruches eine Kündigungsentschädigung und/oder Urlaubsersatzleistung vorliegen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Liegt eine entsprechende Ausleistung des Krankengeldbezuges vor, ist dies nur als Hinweis zu betrachten.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Richtigstellung Abmeldung inklusive Angabe der Kündigungsentschädigung und/oder Urlaubsersatzleistung ist erforderlich, sofern eine Kündigungsentschädigung und/oder Urlaubsersatzleistung anfällt, jedoch unter Berücksichtigung der Ausleistung der Entgeltfortzahlung.
    </p>

  </div>
</details>

## VW1967

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1967 - Die @1 wurde nicht verarbeitet. Die Kündigungsentschädigung muss vor der Urlaubsersatzleistung liegen und die Urlaubsersatzleistung muss an die Kündigungsentschädigung anschließen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u>
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Abmeldung und eine Neuübermittlung mit korrekter Reihenfolge der Kündigungsentschädigung sowie der Urlaubsersatzleistung sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Abmeldung für die übermittelte Richtigstellung der Abmeldung (Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Abmeldung) ist erforderlich.
    </p>

    <p>
      Eine Neuübermittlung mit korrekter Reihenfolge der Kündigungsentschädigung sowie der Urlaubsersatzleistung ist erforderlich.
    </p>

  </div>
</details>

## VW1968

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1968 - Bitte um Überprüfung der @1. Sofern keine Entgeltfortzahlung vorliegt, muss die Kündigungsentschädigung an das Ende der Beschäftigung anschließen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Mit dem zuständigen Kundenservicecenter ist die korrekte Entgeltfortzahlung abzuklären und mittels Arbeits- und Entgeltbestätigung zu melden. Die Abmeldung muss mit der Arbeits- und Entgeltbestätigung übereinstimmen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Wird die Arbeits- und Entgeltbestätigung korrigiert, wird der Hinweis auf der Abmeldung automatisch abgeschlossen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Richtigstellung der Abmeldung mit korrekter Angabe der Kündigungsentschädigung ist erforderlich.
    </p>

  </div>
</details>

## VW1969

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1969 - Bitte um Überprüfung der @1. Sofern keine Entgeltfortzahlung vorliegt, muss die Urlaubsersatzleistung an das Ende der Beschäftigung anschließen.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Mit dem zuständigen Kundenservicecenter ist die korrekte Entgeltfortzahlung abzuklären und mittels Arbeits- und Entgeltbestätigung zu melden. Die Abmeldung muss mit der Arbeits- und Entgeltbestätigung übereinstimmen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Wird die Arbeits- und Entgeltbestätigung korrigiert, wird der Hinweis auf der Abmeldung automatisch abgeschlossen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Richtigstellung der Abmeldung mit korrekter Angabe der Urlaubsersatzleistung ist erforderlich.
    </p>

  </div>
</details>

## VW1970

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1970 - Die @1 wurde nicht verarbeitet, da das Ende des Entgeltanspruches mit dem Ende der Kündigungsentschädigung ident sein muss, sofern keine Urlaubsersatzleistung vorliegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Das Ende des Entgeltanspruches ist dem Ende der Kündigungsentschädigung gleichzusetzen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit einem Ende des Entgeltanspruches, welches dem Ende der Kündigungsentschädigung gleicht, sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Angabe einer Urlaubsersatzleistung sind erforderlich, sofern Anspruch auf eine Urlaubsersatzleistung besteht.
    </p>

  </div>
</details>

## VW1971

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1971 - Die @1 wurde nicht verarbeitet, da das Ende des Entgeltanspruches mit dem Ende der Urlaubsersatzleistung ident sein muss.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Das Ende des Entgeltanspruches ist dem Ende der Urlaubsersatzleistung gleichzusetzen.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit einem Ende des Entgeltanspruches, welches dem Ende der Urlaubsersatzleistung gleicht, sind erforderlich.
    </p>

  </div>
</details>

## VW1972

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1972 - Die @2 wurde nicht verarbeitet, da die Kündigungsentschädigung und/oder Urlaubsersatzleistung für den Abmeldegrund @1 nicht möglich sind.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Abmeldegrund<br>
      @2: Meldungsart (Abmeldung, Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit Angabe des korrekten Abmeldegrundes sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung ohne Angabe einer Kündigungsentschädigung und/oder Urlaubsersatzleistung sind erforderlich.
    </p>

  </div>
</details>

## VW1973

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1973 - Die @1 wurde nicht verarbeitet, da die/der Versicherte zum meldungsrelevanten Zeitpunkt bereits verstorben ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Für einen bereits verstorbenen Dienstnehmer wurden Meldungen über das Todesdatum hinaus übermittelt.
    </p>

    <p>
      Eine Abmeldung mit „Entgeltanspruch Ende“/„Beschäftigungsverhältnis Ende“/„Betriebliche Vorsorge Ende“ (falls das Dienstverhältnis dem BMSVG unterliegt) per 17.07.2026 wurde übermittelt.
    </p>

    <p>
      Das amtlich bestätigte Todesdatum ist der 15.07.2026. Die Abmeldung ist daher nicht zulässig.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die Prüfung des Todesdatums und des auf der Meldung angeführten Datums (zum Beispiel „Entgeltanspruch Ende“/„Beschäftigungsverhältnis Ende“/„Betriebliche Vorsorge Ende“) ist durchzuführen.
    </p>

    <p>
      Ein Storno der Meldung und eine Neumeldung mit korrektem Datum (spätestens Todesdatum) sind erforderlich.
    </p>

  </div>
</details>

## VW1974

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1974 - Die @1 kann nicht verarbeitet werden, da eine weitere konkurrierende Versicherungszeit gespeichert ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn sich der gemeldete Beschäftigungszeitraum mit einer bereits bestehenden Beschäftigung beim selben Dienstgeber zeitlich überschneidet.
    </p>

    <p>
      <strong>Beispiel 1:</strong><br>
      Mit einer mBGM für fallweise Beschäftigte werden die Beschäftigungstage „12“ und „17“ für den Beitragszeitraum 03/2026 gemeldet.
    </p>

    <p>
      Es existiert bereits eine regelmäßige Beschäftigung beim selben Dienstgeber seit 01.01.2026 (laufend).
    </p>

    <p>
      <strong>Beispiel 2:</strong><br>
      Der Dienstgeber übermittelt für den Dienstnehmer eine Anmeldung per 01.03.2026. Es liegt bereits eine Anmeldung per 01.02.2026 vor.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Bei Überschneidung einer fallweisen Beschäftigung mit einer regelmäßigen Beschäftigung ist die Kontaktaufnahme mit der ÖGK erforderlich, um die Rückfrage zu beheben.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Bestehen tatsächlich zwei überschneidende Beschäftigungen, ist die Kontaktaufnahme mit der ÖGK erforderlich, um die Rückfrage zu beheben.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Eine Storno Anmeldung für die falsche Anmeldung ist erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 4:</u><br>
      Eine Abmeldung ist zu übermitteln, sofern diese fehlt.
    </p>

  </div>
</details>

## VW1975

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1975 - Die @1 wurde nicht verarbeitet, da das Beginndatum der Betrieblichen Vorsorge vor dem Anmeldedatum liegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u>
    </p>

    <p>
      <strong>Beispiel 1:</strong><br>
      Auf einer neuerlichen Anmeldung wird versehentlich als Beginndatum der Betrieblichen Vorsorge das Datum des ursprünglichen Eintrittes (erstmalige Beschäftigungsaufnahme) angegeben.
    </p>

    <p>
      <strong>Beispiel 2:</strong><br>
      Es kam zu einer Unterbrechung der SV-Zeit, die BV-Zeit blieb laufend (zum Beispiel Präsenzdienst) und auf der neuerlichen Anmeldung zur SV wurde ein BV-Beginn angegeben.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Anmeldung und eine Neuübermittlung mit Angabe des korrekten Beginnes der Betrieblichen Vorsorge sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Anmeldung und eine Neuübermittlung ohne Angabe zur Betrieblichen Vorsorge sind erforderlich, da die Betriebliche Vorsorge laufend ist.
    </p>

  </div>
</details>

## VW1977

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1977 - Die @2 wurde nicht verarbeitet, da beim Abmeldegrund @1 ein Ende der Betrieblichen Vorsorge angegeben werden muss.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Abmeldegrund<br>
      @2: Meldungsart
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Ein Storno der Abmeldung und eine neuerliche Abmeldung mit Angabe des Endes der Betrieblichen Vorsorge sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ein Storno der Anmeldung und eine neuerliche Anmeldung ohne Angabe des Beginnes der Betrieblichen Vorsorge sind erforderlich, sofern keine Pflicht zur Betrieblichen Vorsorge besteht.
    </p>

  </div>
</details>

## VW1978

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1978 - Die @1 wurde nicht verarbeitet, da das Ende der Betrieblichen Vorsorge unrichtig ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Abmeldung und eine Neuübermittlung mit Angabe des korrekten Endes der Betrieblichen Vorsorge sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ist die Angabe zum Ende der Betrieblichen Vorsorge korrekt (zum Beispiel Bezug von Leistungen durch die ÖGK), ist die Kontaktaufnahme mit der ÖGK erforderlich.
    </p>

  </div>
</details>

## VW1979

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1979 - Die @1 wurde nicht verarbeitet, da die Kündigungsentschädigung nicht vollständig/richtig angegeben wurde.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit vollständiger Angabe der Kündigungsentschädigung sind erforderlich.
    </p>

  </div>
</details>

## VW1980

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1980 - Die @1 wurde nicht verarbeitet, da die Urlaubsersatzleistung nicht vollständig/richtig angegeben wurde.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Vom Dienstgeber wird eine Abmeldung mit Abmeldedatum 31.03.2026 („Beschäftigungsverhältnis Ende“, „Entgeltanspruch Ende“, „Betriebliche Vorsorge Ende“) übermittelt.
    </p>

    <p>
      Zusätzlich wird auf der Abmeldung eine Urlaubsersatzleistung vom 01.04.2026 bis 31.03.2026 angegeben.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Ein Storno der Abmeldung und eine Neuübermittlung mit vollständiger und korrekter Angabe der Urlaubsersatzleistung sind erforderlich.
    </p>

  </div>
</details>

## VW1992

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1992 - Die Versicherungsnummer ist storniert.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Versicherungsnummer
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die gemeldete Versicherungsnummer ist storniert.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Ein Storno der ursprünglichen Meldung und eine Neuübermittlung mit korrekter Versicherungsnummer sind erforderlich. Nutzen Sie für die Abfrage der Versicherungsnummer das DG-Dashboard.
    </p>

  </div>
</details>

## VW1999

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW1999 - Die bei uns gespeicherte Kombination von Versicherungsnummer und Zuname stimmt nicht mit den übermittelten Daten überein. Bitte um Überprüfung
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die ersten zwei Buchstaben des gemeldeten Familiennamens stimmen nicht mit dem der ÖGK aufliegenden Familiennamen überein.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Der Dienstgeber übermittelt für die Dienstnehmerin Andrea Schmidt eine Anmeldung. Als Familienname wird in der Meldung Shmidt angegeben. Die ersten beiden Buchstaben des Familiennamens der Meldung sind nicht korrekt – die Rückfrage wird angelegt.
    </p>

    <p>
      Der laut Meldung übermittelte Name muss mit dem Namen auf der e-card übereinstimmen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Der in der Meldung angegebene Name ist zu prüfen.
    </p>

    <p>
      Ist die Meldung für die korrekte Person erstattet worden, da es sich nur um einen Tippfehler handelt, ist hier keine Korrektur der Meldung erforderlich. Bitte aktualisieren Sie Ihre Stammdaten.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Ist die Meldung für die falsche Person erstattet worden, da der Name und die Versicherungsnummer nicht in korrekter Kombination sind, sind eine Stornomeldung und eine Neuübermittlung mit korrekter Versicherungsnummer und korrektem Namen erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 3:</u><br>
      Bitte um Kontrolle, ob der Vor- und Nachname vertauscht wurden. Bitte die Stammdaten in Ihrer Software entsprechend für künftige Übertragungen korrigieren.
    </p>

  </div>
</details>

## VW2044

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2044 - Die @1 wurde nicht verarbeitet, da das Ende der Betrieblichen Vorsorge unrichtig ist.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen.
    </p>

    <p>
      Eine Storno Abmeldung und eine Neuübermittlung mit Angabe des korrekten Endes der Betrieblichen Vorsorge sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Kontaktaufnahme mit der ÖGK ist erforderlich, sofern das in der Abmeldung angegebene Ende der Betrieblichen Vorsorge korrekt sein sollte.
    </p>

  </div>
</details>

## VW2045

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2045 - Die @1 wurde nicht verarbeitet, da für eine Beschäftigungsfolge vom Typ kurze Beschäftigung ein Ende der Beschäftigung angegeben werden muss.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Storno Abmeldung und eine Neuübermittlung mit Angabe des korrekten Abmeldegrundes oder mit einem Ende der Beschäftigung sind erforderlich.
    </p>

  </div>
</details>

## VW2055

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2055 - Die @1 wurde nicht verarbeitet, da für die Versicherte/den Versicherten ein unbestätigtes Todesdatum vorliegt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Ein bestätigtes Todesdatum kann bei der ÖGK noch nicht gespeichert sein.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Bitte überprüfen Sie auf der Meldung das Ende des Entgeltanspruches sowie das angegebene Todesdatum auf Richtigkeit und korrigieren Sie dies gegebenenfalls durch ein Storno und eine neuerliche Abmeldung.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Bitte überprüfen Sie die auf der übermittelten Meldung angegebene Versicherungsnummer auf ihre Richtigkeit. Sollte es sich um eine andere Person handeln, stornieren Sie die ursprüngliche Meldung und übermitteln die Meldung mit der richtigen Kombination aus dem Namen und der Versicherungsnummer.
    </p>

  </div>
</details>

## VW2083

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2083 - Die Daten zur Ummeldung auf der @1 sind nicht vollständig angegeben. Es fehlt/fehlen: @2.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Satzart<br>
      @2: Angabe, welche Datenfelder nicht befüllt sind, getrennt durch „/“
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u>
    </p>

    <p>
      Abmeldung:
    </p>

    <p>
      Wurden auf der Abmeldung der Abmeldegrund „Ummeldung“ und das Ummeldedatum angegeben, müssen auch die Felder „Zielversicherungsträger Ummeldung“ und „Beitragskontonummer Ummeldung“ belegt sein.
    </p>

    <p>
      Wurden auf der Abmeldung der Abmeldegrund „Ummeldung“ und kein Ummeldedatum angegeben, dürfen auch die Felder „Zielversicherungsträger Ummeldung“, „Beitragskontonummer Ummeldung“, „Referenzwert Ummeldung“ sowie „Sonderfall Ummeldung“ nicht belegt sein. Ist das doch der Fall, wird diese Rückfrage angelegt.
    </p>

    <p>
      Richtigstellung Abmeldung:
    </p>

    <p>
      Wurden auf der Richtigstellung Abmeldung der Abmeldegrund „Ummeldung“ und das Ummeldedatum angegeben und der aktuell gespeicherte Abmeldegrund ist ungleich „Ummeldung“, müssen die Felder „Zielversicherungsträger Ummeldung“ und „Beitragskontonummer Ummeldung“ belegt sein.
    </p>

    <p>
      Wurden auf der Richtigstellung Abmeldung der Abmeldegrund „Ummeldung“ und das Ummeldedatum angegeben und der aktuell gespeicherte Abmeldegrund ist ebenfalls „Ummeldung“, müssen die Felder „Richtiges Ummeldedatum“, „Zielversicherungsträger Ummeldung“ und „Beitragskontonummer Ummeldung“ belegt sein.
    </p>

    <p>
      Wurde auf einer Richtigstellung Abmeldung zu einer Ummeldung kein Ummeldedatum angegeben, dürfen auch die Felder „Richtiges Ummeldedatum“, „Zielversicherungsträger Ummeldung“, „Beitragskontonummer Ummeldung“, „Sonderfall Ummeldung“, „Referenzwert Ummeldung“, „Referenzwert Ummeldung ursprüngliche Meldung“ und „Referenzwert Ummeldung Sonderfall Zielbeitragskontoänderung“ nicht belegt sein.
    </p>

    <p>
      Storno Abmeldung:
    </p>

    <p>
      Wurde auf einer Storno Abmeldung zu einer Ummeldung kein Ummeldedatum angegeben, dürfen auch die Felder „Referenzwert Ummeldung“ und „Referenzwert Ummeldung ursprüngliche Meldung“ nicht belegt sein.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Stornomeldung für die Abmeldung/Richtigstellung Abmeldung* und eine Neuübermittlung mit Angabe der korrekten und vollständigen Daten sind erforderlich.
    </p>

    <p>
      *(Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Abmeldung mit Angabe der korrekten und vollständigen Daten ist erforderlich.
    </p>

    <p>
      Die Kontaktaufnahme mit der ÖGK ist erforderlich, damit die Rückfrage, welche auf Grund der falschen Storno Abmeldung angelegt wurde, behoben werden kann.
    </p>

  </div>
</details>

## VW2084

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2084 - Mit den angegebenen Daten zur Beitragskontonummer Ummeldung konnte kein korrektes Beitragskonto für die Ummeldung identifiziert werden.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn eine Abmeldung oder eine Richtigstellung Abmeldung übermittelt wird und die angegebene Beitragskontonummer sowie die angegebene „Beitragskontonummer Ummeldung“ ident sind.
    </p>

    <p>
      Ebenso wird diese Rückfrage angelegt, wenn die angegebene „Beitragskontonummer Ummeldung“ nicht gefunden werden kann.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Die angegebenen Beitragskontonummern sind auf ihre Richtigkeit zu prüfen!
    </p>

    <p>
      Eine Stornomeldung für die Abmeldung/Richtigstellung Abmeldung* und eine Neuübermittlung mit Angabe der korrekten Beitragskontonummern sind erforderlich.
    </p>

    <p>
      *(Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Abmeldung)
    </p>

  </div>
</details>

## VW2085

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2085 - Die @3 wurde nicht verarbeitet, da das @2 vor dem @1 liegen muss.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Ummeldedatum/richtiges Ummeldedatum<br>
      @2: Ende Entgelt/Ende BV<br>
      @3: Meldungstyp
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn auf der Abmeldung/Richtigstellung Abmeldung das Ummeldedatum vor dem Ende des Entgeltanspruches/dem Ende der Betrieblichen Vorsorge liegt.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Ummeldedatum = 01.08.2026
    </p>

    <p>
      Ende des Entgeltanspruches / Ende der Betrieblichen Vorsorge = 03.08.2026
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Stornomeldung für die Abmeldung/Richtigstellung Abmeldung* und eine Neuübermittlung mit Angabe der korrekten Ummelde- und Abmeldedaten sind erforderlich.
    </p>

    <p>
      *(Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Abmeldung)
    </p>

  </div>
</details>

## VW2086

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2086 - Die Referenzwerte für die Meldung(en) am neuen Beitragskonto sind nicht vollständig. Bitte übermitteln Sie die Meldung(en) am neuen Beitragskonto selbst bzw. übermitteln Sie eine Richtigstellung mit Referenzwerten zur Ummeldung, wenn die Ummeldung am neuen Beitragskonto automatisch erfolgen soll.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn bei einer:<br>
      <span style="display: inline-block; padding-left: 1rem;">• Abmeldung: Eine Abmeldung mit Abmeldegrund „Ummeldung“ gemeldet ist und der „Referenzwert Ummeldung“ nicht belegt wurde.</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• Richtigstellung Abmeldung: Eine Richtigstellung Abmeldung gemeldet wird, welche eine Ummeldung betrifft (gemeldeter Abmeldegrund ist „Ummeldung“ oder der bisherige Abmeldegrund ist „Ummeldung“), dann muss der „Referenzwert Ummeldung“ belegt sein.</span><br>
      <span style="display: inline-block; padding-left: 1rem;">Eine Richtigstellung Abmeldung mit Abmeldegrund „Ummeldung“ gemeldet wird und der bisherige Abmeldegrund ebenfalls „Ummeldung“ ist und zusätzlich auch noch die „Beitragskontonummer Ummeldung“ geändert werden soll, müssen die Felder „Referenzwert Ummeldung“, „Referenzwert Ummeldung ursprüngliche Meldung“ sowie „Referenzwert Ummeldung Sonderfall Zielbeitragskontoänderung“ belegt sein.</span><br>
      <span style="display: inline-block; padding-left: 1rem;">Eine Richtigstellung Abmeldung mit Abmeldegrund ungleich „Ummeldung“ gemeldet wird, jedoch auf der zu korrigierenden Meldung der Abmeldegrund „Ummeldung“ hinterlegt ist, dann müssen sowohl der „Referenzwert Ummeldung“ als auch der „Referenzwert Ummeldung ursprüngliche Meldung“ belegt sein.</span><br>
      <span style="display: inline-block; padding-left: 1rem;">Eine Richtigstellung Abmeldung gemeldet wird, welche eine Ummeldung betrifft (gemeldeter Abmeldegrund ist „Ummeldung“ UND der bisherige Abmeldegrund ist „Ummeldung“) und es wurde kein Ummeldedatum angegeben, wird noch geprüft, ob im Versicherungswesen Daten zur Ummeldung gespeichert sind.</span>
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Stornomeldung für die Abmeldung/Richtigstellung Abmeldung* und eine Neuübermittlung mit Angabe der korrekten Referenzwerte sind erforderlich.
    </p>

    <p>
      *(Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Abmeldung)
    </p>

  </div>
</details>

## VW2087

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2087 - Die Referenzwerte für ein Storno der Anmeldung am neuen Beitragskonto sind nicht angegeben. Bitte übermitteln Sie die Meldung am neuen Beitragskonto ggf. selbst, wenn ein Storno der Anmeldung am neuen Beitragskonto zu erfolgen hat.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Die Rückfrage wird angelegt, wenn bei einer:<br>
      <span style="display: inline-block; padding-left: 1rem;">• Storno Abmeldung: Eine Storno Abmeldung gemeldet wird mit dem bisherigen Abmeldegrund „Ummeldung“ und wurde in einem der Felder „Referenzwert Ummeldung“ oder „Referenzwert Ummeldung ursprüngliche Meldung“ nichts gemeldet.</span><br>
      <span style="display: inline-block; padding-left: 1rem;">Eine Storno Abmeldung zu einer Ummeldung gemeldet wird und kein Ummeldedatum angegeben ist, wird noch geprüft, ob im Versicherungswesen Daten zur Ummeldung gespeichert sind.</span><br>
      <span style="display: inline-block; padding-left: 1rem;">• Richtigstellung Abmeldung: Eine Richtigstellung Abmeldung gemeldet wird, mit welcher der Abmeldegrund von „Ummeldung“ auf einen anderen Abmeldegrund geändert wird und kein Ummeldedatum angegeben wird, wird noch geprüft, ob im Versicherungswesen Daten zur Ummeldung gespeichert sind.</span>
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Storno Anmeldung auf der neuen Beitragskontonummer mit Angabe der korrekten Daten (Datum, Referenzwert) ist erforderlich, wenn die Ummeldung nicht stattgefunden hat.
    </p>

  </div>
</details>

## VW2088

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2088 - Es liegen am Tag vor dem @1 keine beitragspflichtigen Versicherungszeiten in der SV und/oder BV vor. Eine @2 zum @1 erfolgt nur dann, wenn eine Wiederaufnahme der Beschäftigung mit dem @1 mitgeteilt wird.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Ummeldedatum/richtiges Ummeldedatum<br>
      @2: Anmeldung/Richtigstellung Anmeldung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Liegt am Tag vor dem Ummeldedatum/richtigen Ummeldedatum keine beitragspflichtige Versicherungszeit in der SV und/oder BV vor und das Kennzeichen „Sonderfall Ummeldung“ ist nicht gesetzt, wird die Rückfrage angelegt.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Eine Abmeldung mit Abmeldegrund „Ummeldung“, Ummeldedatum 31.08.2025 und ohne Kennzeichen „Sonderfall Ummeldung“ wird übermittelt. Die restlichen zwingenden Felder sind mit zulässigen Werten korrekt befüllt. Im Versicherungsverlauf ist eine SV-Versicherungszeit als Angestellte vom 01.06.2023 bis 15.07.2024 mit Abmeldegrund „Karenz nach MSchG/VKG“ gespeichert. Da zum Ummeldedatum keine beitragspflichtige Versicherungszeit in der SV und/oder BV vorliegt und das Kennzeichen „Sonderfall Ummeldung“ nicht gesetzt ist, wird die Rückfrage angelegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Stornomeldung für die Abmeldung/Richtigstellung Abmeldung* und eine Neuübermittlung mit Angabe des Kennzeichens „Sonderfall Ummeldung“ sind erforderlich.
    </p>

    <p>
      *(Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Abmeldung)
    </p>

  </div>
</details>

## VW2089

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2089 - Das @1 ist für die vereinfachte Ummeldung nicht vorgesehen. Bitte übermitteln Sie die Meldungen am neuen Beitragskonto selbst.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Beitragskonto/Beitragskonto Ummeldung
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Wenn der zur Beitragskontonummer bzw. „Beitragskontonummer Ummeldung“ betroffene Versicherungsumstandtyp für die vereinfachte Ummeldung nicht vorgesehen ist, aber ein „Referenzwert Ummeldung“ angegeben wurde, wird die Rückfrage angelegt.
    </p>

    <p>
      <strong>Beispiel:</strong><br>
      Eine Abmeldung mit Abmeldegrund „Ummeldung“, Ummeldedatum und „Referenzwert Ummeldung“ wird für einen Zivildiener übermittelt. Da die vereinfachte Ummeldung laut Versicherungsumstandtyp nicht für den Versicherungsumstandtyp „Zivildienst“ vorgesehen ist, wird die Rückfrage angelegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Stornomeldung für die Abmeldung/Richtigstellung Abmeldung* und eine Anmeldung auf der neuen Beitragskontonummer sind erforderlich.
    </p>

    <p>
      *(Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Abmeldung)
    </p>

  </div>
</details>

## VW2090

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2090 - Zum angegebenen Ummeldedatum konnte keine Ummeldung gefunden werden.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Wenn bei einer Richtigstellung Abmeldung (Richtigstellung einer Ummeldung bzw. Storno einer Ummeldung) oder einer Storno Abmeldung (zu einer Ummeldung) zum angegebenen Ummeldedatum keine gespeicherte Ummeldung gefunden wurde, wird die Rückfrage angelegt.
    </p>

    <p>
      <strong>Beispiel 1:</strong><br>
      Eine Richtigstellung Abmeldung mit Abmeldegrund „Ummeldung“, Ummeldedatum 01.02.2026, richtigem Ummeldedatum 01.05.2026, „Referenzwert Ummeldung“ und „Referenzwert Ummeldung ursprüngliche Meldung“ wird übermittelt. Es liegt eine gespeicherte Ummeldung mit Ummeldedatum 31.01.2026 vor. Da zum angegebenen Ummeldedatum keine gespeicherte Ummeldung gefunden wird, wird die Rückfrage angelegt.
    </p>

    <p>
      <strong>Beispiel 2:</strong><br>
      Eine Storno Abmeldung mit Ummeldedatum 01.02.2026, „Referenzwert Ummeldung“ und „Referenzwert Ummeldung ursprüngliche Meldung“ wird übermittelt. Es liegt eine gespeicherte Ummeldung mit Ummeldedatum 20.02.2026 vor. Da zum angegebenen Ummeldedatum keine gespeicherte Ummeldung gefunden wird, wird die Rückfrage angelegt.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Eine Stornomeldung für die Richtigstellung Abmeldung* und eine Neuübermittlung mit Angabe der korrekten Ummeldedaten sind erforderlich.
    </p>

    <p>
      *(Achtung: ursprünglicher Referenzwert = Referenzwert der Richtigstellung Abmeldung)
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Abmeldung mit Angabe der korrekten Ummeldedaten ist erforderlich.
    </p>

    <p>
      Die Kontaktaufnahme mit der ÖGK ist erforderlich, um die Rückfrage, welche auf Grund der falschen Stornomeldung entstanden ist, zu beheben.
    </p>

  </div>
</details>

## VW2091

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2091 - Es liegt @1 einer Ummeldung ohne Ummeldedaten vor. Bitte übermitteln Sie die Meldung(en) am neuen Beitragskonto selbst.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: eine Richtigstellung/ein Storno
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Wenn bei einer Richtigstellung Abmeldung (Richtigstellung einer Ummeldung mit Zielbeitragskontoänderung) oder einer Storno Abmeldung (zu einer Ummeldung) keine Ummeldedaten vorliegen (weil die ursprüngliche Ummeldung zu einem Zeitpunkt übermittelt wurde, wo die Ummeldedaten noch nicht übermittelt werden konnten), wird die Rückfrage angelegt.
    </p>

    <p>
      <strong>Beispiel 1:</strong><br>
      Eine Richtigstellung Abmeldung mit Abmeldegrund „Ummeldung“, Ummeldedatum 01.02.2026, richtigem Ummeldedatum 01.02.2026, „Referenzwert Ummeldung“ und „Referenzwert Ummeldung ursprüngliche Meldung“ wird übermittelt. Für das betroffene Versicherungsverhältnis sind keine Ummeldedaten gespeichert.
    </p>

    <p>
      <strong>Beispiel 2:</strong><br>
      Eine Storno Abmeldung mit Ummeldedatum 01.02.2026, „Referenzwert Ummeldung“ und „Referenzwert Ummeldung ursprüngliche Meldung“ wird übermittelt. Für das betroffene Versicherungsverhältnis sind keine Ummeldedaten gespeichert.
    </p>

    <p>
      <u>Lösungsmöglichkeit:</u><br>
      Eine Anmeldung auf der neuen Beitragskontonummer ist erforderlich.
    </p>

  </div>
</details>

## VW2098

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2098 - Die Kündigungsentschädigung/Urlaubsersatzleistung kollidiert mit einer Leistungsanspruchszeit.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Es ist mit dem zuständigen Kundenservicecenter die korrekte Entgeltfortzahlung abzuklären und mittels Arbeits- und Entgeltbestätigung zu melden. Die Abmeldung muss mit der Arbeits- und Entgeltbestätigung übereinstimmen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Wird die Arbeits- und Entgeltbestätigung korrigiert, wird der Hinweis auf der Abmeldung automatisch abgeschlossen.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Eine Storno Abmeldung und eine Neuübermittlung mit Angabe der korrekten Abmeldedaten sind erforderlich.
    </p>

  </div>
</details>

## VW2101

<details style="margin-bottom: 1rem;">
  <summary style="cursor: pointer; font-weight: 600;">
    VW2101 - Die @1 wurde nicht verarbeitet, da @2 der Betrieblichen Vorsorge nicht mit dem @3 des Sonderwochengeldbezuges übereinstimmt.
  </summary>

  <div style="padding: 0.75rem 0 0 1rem;">

    <p>
      <u>Variabler Text:</u><br>
      @1: Meldungsart<br>
      @2: der Beginn/das Ende<br>
      @3: Beginn/Ende
    </p>

    <p>
      <u>Erklärung bzw. Beispiel:</u><br>
      Vom Dienstgeber wird eine Anmeldung zur Betrieblichen Vorsorge mit Anmeldedatum 03.03.2026 übermittelt. Es liegt jedoch kein Sonderwochengeldbezug mit Beginn 03.03.2026 vor.
    </p>

    <p>
      <u>Lösungsmöglichkeit 1:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen. Eine Storno Anmeldung und eine Neuübermittlung mit Angabe der korrekten Anmeldedaten sind erforderlich.
    </p>

    <p>
      <u>Lösungsmöglichkeit 2:</u><br>
      Die Versicherungszeit ist im DG-Dashboard zu überprüfen. Ist der Sonderwochengeldbezug noch nicht ersichtlich, Kontaktaufnahme mit der ÖGK.
    </p>

  </div>
</details>