# SQL-Server Berechtigungskonzept

In dieser Dokumentation werden die Benutzer und Rollen beschrieben, die bei der Installation der RZL Programme auf dem SQL Server angelegt werden. Diese Einrichtung ist notwendig, um einen reibungslosen Zugriff der Programme auf die Datenbank zu gewährleisten.

> **Hinweis:**  
> Diese Anleitung richtet sich primär an IT-Techniker. Bei fehlerhaften Änderungen besteht das Risiko, dass die RZL Programme nicht wie erwartet funktionieren oder ausfallen können.

## Server-Rollen

### `rzl_server_admin`
- **Berechtigungen:**  
    - Update der RZL Programme durchführen  
    - Backups wiederherstellen  
    - Neue Datenbanken erstellen  
    - Metadaten sämtlicher Objekte betrachten
- **Server-Rollen:** `dbcreator`
- **Server-Rechte:** `VIEW ANY DEFINITION`, `VIEW SERVER STATE`

### `rzl_server_user`
- **Berechtigungen:**  
    - Metadaten sämtlicher Objekte betrachten
- **Server-Rollen:** –
- **Server-Rechte:** `VIEW ANY DEFINITION`, `VIEW SERVER STATE`

## Server-Anmeldungen

| Anmeldung                                           | Server-Rollen            | Server-Rechte |
| --------------------------------------------------- | ------------------------ | ------------- |
| `DOMAIN\Domänen-Admins`                             | public, rzl_server_admin | CONNECT SQL   |
| `DOMAIN\Domänen-Benutzer`                           | public, rzl_server_user  | CONNECT SQL   |
| `DOMAIN\rzlServiceMSA$`<br>`NT Service\RZL Service` | public, rzl_server_admin | CONNECT SQL   |

## Datenbank-Rollen

### `rzl_admin`
- **Berechtigungen:** Vollzugriff auf die Datenbank
- **Datenbank-Rollen:** `db_owner`
- **Datenbank-Rechte:** –

### `rzl_user`
- **Berechtigungen:**  
- Backups anlegen  
- Zugriff auf das dbo-Schema  
- ALTER-Recht
- **Datenbank-Rollen:** –
- **Datenbank-Rechte:** `ALTER`, `BACKUP DATABASE`, `BACKUP LOG`, `CHECKPOINT`
- **Schema-Rechte dbo:** `DELETE`, `EXECUTE`, `INSERT`, `SELECT`, `UPDATE`

## Datenbank-Benutzer

| Benutzer                                 | Anmeldung               | Datenbank-Rollen | Datenbank-Rechte |
| ---------------------------------------- | ----------------------- | ---------------- | ---------------- |
| Domänen-Admins                           | DOMAIN\Domänen-Admins   | rzl_admin        | CONNECT          |
| Domänen-Benutzer                         | DOMAIN\Domänen-Benutzer | rzl_user         | CONNECT          |
| rzlServiceMSA$<br>NT Service\RZL Service | DOMAIN\rzlServiceMSA$   | rzl_admin        | CONNECT          |

## Kontrolle und Reparatur

Mit der Konsolenanwendung `DbInit.exe` kann die korrekte Konfiguration der Benutzer und Rollen kontrolliert und bei Bedarf korrigiert werden. Die Anwendung ist im Installationsverzeichnis (`C:\Program Files (x86)\RZL Software\RZLWin`) der RZL Programme zu finden und muss per Shell (Eingabeaufforderung, PowerShell, etc.) aufgerufen werden.

> **Hinweis:**  
> Der Benutzer muss – zumindest temporär – die Rolle `sysadmin` am SQL Server besitzen, damit die Anwendung erfolgreich ausgeführt werden kann.

### `/checkLoginsAndUsers`
Mit diesem Parameter erfolgt die Kontrolle. Als Ergebnis wird eine Auflistung aller relevanten Benutzer und Rollen geliefert, mit dem jeweiligen Status (OK/NOK). Sollte eine fehlerhafte Konfiguration (NOK) existieren, reparieren Sie diese manuell oder mit Hilfe der `DbInit.exe`.

**Beispiel:**
```shell
.\DbInit.exe /server:localhost\SQLEXPRESS_RZL /db:RZLZMV_XXX /checkLoginsAndUsers
```

### `/fixLoginsAndUsers`
Mit diesem Parameter erfolgen die Reparatur und die Kontrolle aller relevanten Benutzer und Rollen. Sollte hier etwas nicht funktionieren, wenden Sie sich bitte an den technischen Support von RZL.

**Beispiel:**
```shell
.\DbInit.exe /server:localhost\SQLEXPRESS_RZL /db:RZLZMV_XXX /fixLoginsAndUsers
```