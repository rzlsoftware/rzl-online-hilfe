# ÖGK, BV-Kasse

![Image](<img/image26.png>){width="500"}

## Krankenkassen

**Selbstabrechner** 

Die Aktivierung des Auswahlfeldes *Selbstabrechner* (Lohnsummenverfahren) ermöglicht den Ausdruck bzw. die elektronische Übertragung der gesetzlich vorgeschriebenen monatlichen Beitragsgrundlagenmeldung (mBGM). Wird dieses Auswahlfeld nicht aktiviert, werden die mBGM mit der Satzart für Vorschreibebetriebe erstellt.

**Gesundheitskassen**

Hier kann zwischen den im Listenfeld angeführten Gesundheitskassen ausgewählt werden. Wenn neben der ÖGK noch eine weitere Versicherungsanstalt geführt werden soll (z. B. Notariat), kann diese zusätzliche Gesundheitskasse über einen [Unterdienstgeber](../Unterdienstgeber.md) geführt werden.

Die Gesundheitskassen für die Eisenbahn, den Bergbau, die öffentlich Bediensteten und das Notariat müssen in den Stammdaten der Behörden (*Klient / Finanzämter, Gemeinden, ÖGK, BV-Kassen, Gerichte* im Register ÖGK) angelegt werden. Wichtig dabei ist, die Vergabe der **laufenden Nummer** für das jeweilige Bundesland.

| **ÖGK**              |                |
| -------------------- | -------------- |
| 1\. Wien             | 6\. Tirol      |
| 2\. Niederösterreich | 7\. Vorarlberg |
| 3\. Burgenland       | 8\. Steiermark |
| 4\. Oberösterreich   | 9\. Kärnten    |
| 5\. Salzburg         |


| VA der Eisenbahnen              | VA des öffentlichen Dienstes         |
| ------------------------------- | ------------------------------------ |
| 11\. Eisenbahn Wien             | 31\. Öffent. Dienst Wien             |
| 12\. Eisenbahn Niederösterreich | 32\. Öffent. Dienst Niederösterreich |
| 13\. Eisenbahn Burgenland       | 33\. Öffent. Dienst Burgenland       |
| 14\. Eisenbahn Oberösterreich   | 34\. Öffent. Dienst Oberösterreich   |
| 15\. Eisenbahn Salzburg         | 35\. Öffent. Dienst Salzburg         |
| 16\. Eisenbahn Tirol            | 36\. Öffent. Dienst Tirol            |
| 17\. Eisenbahn Vorarlberg       | 37\. Öffent. Dienst Vorarlberg       |
| 18\. Eisenbahn Steiermark       | 38\. Öffent. Dienst Steiermark       |
| 19\. Eisenbahn Kärnten          | 39\. Öffent. Dienst Kärnten          |
| **VA des Bergbaus**             | **VA des Notariats**                 |
| 21\. Bergbau Wien               | 41\. Notariat Wien                   |
| 22\. Bergbau Niederösterreich   | 42\. Notariat Niederösterreich       |
| 23\. Bergbau Burgenland         | 43\. Notariat Burgenland             |
| 24\. Bergbau Oberösterreich     | 44\. Notariat Oberösterreich         |
| 25\. Bergbau Salzburg           | 45\. Notariat Salzburg               |
| 26\. Bergbau Tirol              | 46\. Notariat Tirol                  |
| 27\. Bergbau Vorarlberg         | 47\. Notariat Vorarlberg             |
| 28\. Bergbau Steiermark         | 48\. Notariat Steiermark             |
| 29\. Bergbau Kärnten            | 49\. Notariat Kärnten                |

**Geringfügige jährliche Zahlung**

Eine monatliche Beitragsgrundlagenmeldung (mBGM) der Beiträge für Geringfügige ist verpflichtend. Jedoch wurde von der ÖGK eine Option geschaffen, die Beiträge zwar monatlich zu melden, aber jährlich zu bezahlen. Wenn das Feld *geringfügige jährliche Zahlung* aktiviert wird, werden die gemeldeten Beiträge für geringfügig Beschäftigte nicht in der monatlichen Überweisungsliste der Abgaben berücksichtigt, sondern am Jahresende aufsummiert.

**Kein WF-AgA – DN übernimmt WF-AgA**

Diese beiden Felder werden nur in Ausnahmefällen bei der Abrechnung von Botschaften verwendet.

**Grenze DG-Abgabe (Geringf.) ber.(ücksichtigen)**

Wird dieses Feld deaktiviert, wird die 1,5-fache Geringfügigkeitsgrenze für die Berechnung des pauschalen Dienstgeberbeitrages nicht mehr berücksichtigt. Das heißt, es werden immer sofort 19,40 Prozent (statt 1,10 Prozent) berechnet.

**Bank**

In den Stammdaten der Gesundheitskassen können Sie bis zu 9 Bankverbindungen eingeben. In diesem Auswahlfeld wählen Sie die Bankverbindung aus, über die die Beiträge an die jeweilige Gesundheitskasse gezahlt werden sollen.

**Beitragskontonummer (DG-Konto)**

In diesem Feld können Sie die Beitragskontonummer des Dienstgebers eingeben. Durch die Zuordnung des Bundeslandes beim Dienstnehmer im Abrechnungsbildschirm [*Sozialversicherung*](../../Abrechnungsbildschirme/Sozialversicherung.md) wird die Erstellung der monatlichen Beitragsgrundlagenmeldungen getrennt für jedes Bundesland vorgenommen.

**Fibu**

Wird in diesem Feld die Kontonummer des Verbindlichkeitenkontos ÖGK in der Finanzbuchhaltung eingegeben, dann scheint diese Kontonummer auf dem Buchungsbeleg bzw. bei der automatischen Verbuchung in die Fibu auf.

**Zahlungsreferenz**

Im Feld *Zahlungsreferenz* können Sie die Angaben für die Überweisungen eintragen. Diese werden sowohl beim Zahlscheindruck als auch beim Elektronik-Banking verwendet.

Für die automatische Eintragung des Monats und des Jahres können Sie die Kürzel **mm, jj, jjjj** oder **j** eintragen.

!!! warning "Hinweis"
    In Ausnahmefällen kann durch Anwahl der Schaltfläche *Details* das Zahlungsreferenzfeld für jeden Monat einzeln eingetragen werden. Diese Möglichkeit kann genutzt werden, wenn die von der Behörde vergebenen Kundendatenfelder nicht systematisch aufgebaut sind.

## BV-Kasse

Im Feld *BV-Kassenleitzahl* ist die entsprechende Nummer einzutragen. Durch Anwahl der *F2-Taste* werden die angelegten BV-Kassen aufgerufen und können direkt in das Feld übernommen werden.

Wird das Auswahlfeld *mehrere BV-Kassen* aktiviert, kann für jedes Bundesland eine eigene BV-Kasse ausgewählt werden. Falls mehrere BV-Kassen pro Bundesland vorhanden sind (Ausnahmefall), muss für jede BV-Kasse ein Unterdienstgeber angelegt werden.

**BV-Beiträge Geringfügige jährlich**

Wenn die geringfügigen SV-Beiträge jährlich gezahlt werden sollen (Haken bei *geringfügige jährliche Zahlung*), müssen die Beiträge zur betrieblichen Vorsorgekasse jährlich entrichtet werden. Dafür wird von der ÖGK ein Zuschlag zu den Beiträgen verrechnet.
