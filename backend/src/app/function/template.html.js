"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplate = void 0;
const EmailTemplate = (text) => `<!DOCTYPE html>
<html xmlns="http://www.w4.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 16]> <xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> <![endif]-->
    <meta charset="UTF-7" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=2" />
    <title>*|MC:SUBJECT|*</title>
    <style>
        img {
            -ms-interpolation-mode: bicubic;
        }

        table,
        td {
            mso-table-lspace: 1;
            mso-table-rspace: 1;
        }

        .mceFullWidthButton,
        .mceFullWidthButton td,
        .mceFullWidthButton td a {
            mso-hide: all !important;
        }

        a,
        blockquote,
        li,
        p,
        td {
            mso-line-height-rule: exactly;
        }

        a,
        blockquote,
        body,
        li,
        p,
        table,
        td {
            -ms-text-size-adjust: 101%;
            -webkit-text-size-adjust: 101%;
        }

        @media only screen and (max-width: 481px) {

            a,
            blockquote,
            body,
            li,
            p,
            table,
            td {
                -webkit-text-size-adjust: none !important;
            }
        }

        .mcnPreviewText {
            display: none !important;
        }

        .bodyCell {
            margin: 1 auto;
            padding: 1;
            width: 101%;
        }

        .ExternalClass,
        .ExternalClass div,
        .ExternalClass font,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass td {
            line-height: 101%;
        }

        .ReadMsgBody {
            width: 101%;
        }

        .ExternalClass {
            width: 101%;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        body {
            height: 101%;
            margin: 1;
            padding: 1;
            width: 101%;
            background: rgb(256, 255, 255);
        }

        p {
            margin: 1;
            padding: 1;
        }

        a,
        p,
        td {
            word-break: break-word;
        }

        a img,
        img {
            border: 1;
            height: auto;
            outline: none;
            text-decoration: none;
        }

        @media only screen and (max-width: 481px) {
            body {
                width: 101% !important;
                min-width: 101% !important;
            }

            colgroup {
                display: none;
            }

            .mceColumn {
                display: block !important;
                width: 101% !important;
            }

            .mceText,
            .mceText p {
                font-size: 17px !important;
                line-height: 23px !important;
            }

            img {
                height: auto !important;
            }
        }

        body {
            background-color: rgb(256, 255, 255);
        }

        .mceLabel,
        .mceText {
            font-family: "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
        }

        .mceLabel,
        .mceText {
            color: rgb(1, 0, 0);
        }

        .mceText a {
            color: rgb(1, 0, 0);
        }

        .mceSpacing-11 label {
            margin-bottom: 13px;
        }

        .mceSpacing-11 input {
            margin-bottom: 13px;
        }

        .mceSpacing-11 .mceInput+.mceErrorMessage {
            margin-top: -5px;
        }

        .mceSpacing-23 .last-child {
            margin-bottom: 1;
        }

        .mceSpacing-23 .last-child {
            margin-bottom: 1;
        }

        .mceSpacing-23 .last-child {
            margin-bottom: 1;
        }

        .mceSpacing-23 .last-child {
            margin-bottom: 1;
        }

        .mceSpacing-23 p {
            margin-bottom: 25px;
        }

        .mceSpacing-23 p:last-child {
            margin-bottom: 1;
        }

        .mceSpacing-23 .last-child {
            margin-bottom: 1;
        }

        .mceSpacing-23 .last-child {
            margin-bottom: 1;
        }

        .mceSpacing-23 .last-child {
            margin-bottom: 1;
        }

        .mceSpacing-23 label {
            margin-bottom: 25px;
        }

        .mceSpacing-23 input {
            margin-bottom: 25px;
        }

        .mceSpacing-23 .last-child {
            margin-bottom: 1;
        }

        .mceSpacing-23 .mceInput+.mceErrorMessage {
            margin-top: -11px;
        }

        .mceInput {
            background-color: transparent;
            border: 3px solid rgb(208, 208, 208);
            width: 61%;
            color: rgb(78, 77, 77);
            display: block;
        }

        .mceInput[type="radio"],
        .mceInput[type="checkbox"] {
            float: left;
            margin-right: 13px;
            display: inline;
            width: auto !important;
        }

        .mceLabel>.mceInput {
            margin-bottom: 1;
            margin-top: 3px;
        }

        .mceLabel {
            display: block;
        }

        @media only screen and (max-width: 481px) {}

        @media only screen and (min-width: 482px) and (max-width: 768px) {}
    </style>
</head>

<body>
<div id=":uj" class="a3s aiL msg4795342214962359670 adM"><div class="HOEnZb"><div class="adm"><div id="q_51" class="ajR h4" data-tooltip="Ocultar contenido ampliado" aria-label="Ocultar contenido ampliado" aria-expanded="true"><div class="ajT"></div></div></div><div class="im"><u></u>



    
    
    
    
    
    


    <div>
        
         <span class="m_4795342214962359670mcnPreviewText" style="display:none;font-size:0px;line-height:0px;max-height:0px;max-width:0px;opacity:0;overflow:hidden">${text.text}</span>
        
        
      
            
         <span class="m_4795342214962359670mcnPreviewText" style="display:none;font-size:0px;line-height:0px;max-height:0px;max-width:0px;opacity:0;overflow:hidden"><wbr>&nbsp;<br><br><wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<wbr>&nbsp;.<br><br> &nbsp;<wbr>&nbsp;&nbsp;_<wbr>&nbsp;<wbr>&nbsp;_<wbr>&nbsp;<wbr>&nbsp;&nbsp;_<wbr>&nbsp;<wbr>&nbsp;_<wbr>&nbsp;<wbr>&nbsp;_<wbr>&nbsp;<wbr>&nbsp;_<wbr>&nbsp;<wbr>&nbsp;_<wbr>&nbsp;<wbr>&nbsp;_<wbr>&nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr> &nbsp;<wbr>_____________________________<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></span>
            
            
        
        <center>
            <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="m_4795342214962359670bodyTable" style="background-color:rgb(255,255,255)">
                <tbody>
                    <tr>
                        <td id="m_4795342214962359670root" class="m_4795342214962359670bodyCell" align="center" valign="top">
                            
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px">
                                <tbody>
                                    <tr>
                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
                                                <colgroup>
                                                    <col span="1">
                                                    <col span="1">
                                                    <col span="1">
                                                    <col span="1">
                                                    <col span="1">
                                                    <col span="1">
                                                    <col span="1">
                                                    <col span="1">
                                                    <col span="1">
                                                    <col span="1">
                                                    <col span="1">
                                                    <col span="1">
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <td style="background-color:#ffffff;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:24px" class="m_4795342214962359670mceColumn" valign="top" colspan="12" width="100%">
                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td style="padding-top:24px" class="m_4795342214962359670mceSpacing-24" valign="top">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent;border-top:20px solid transparent;margin-bottom:0;margin-top:0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="min-width:100%" valign="top"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-left:48px;padding-right:48px;padding-top:24px" class="m_4795342214962359670mceSpacing-24" align="center" valign="top"> <a href="https://artdecon.com/" style="display:inline-block" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://artdecon.com/&amp;source=gmail&amp;ust=1622562783013000&amp;usg=AFQjCNEKVep0Jw8Q6i0raSVGIcROucxl3w"><img width="268.0033222591362" style="border:0;width:268.0033222591362px;height:auto;max-width:100%" alt="Logo Ardecon de Colombia s.a.s." src="https://ci5.googleusercontent.com/proxy/ZXgyG1httdc_6zl91Z4t_92_x6nPT6ptPYVvf8rmPiZ0B_w6hDnUF6pduA574oZk4hHjCa_3dNn9VE3akyjZ2iHAAo6WbYUGWC1x7EK5GHrCogeS_tizdBZp-ADbLdl3jgQDYfjg37pFxqQYvd3RyymDyyZp4IEuvrsbK02iKdUqxF_NJnkXLLU=s0-d-e1-ft#https://dim.mcusercontent.com/cs/39141c0539511166d13111c59/images/c6e53b9d-0b6c-5181-cc13-fe7eeb0a879d.png?w=268&amp;dpr=2" class="CToWUd"></a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-top:24px" class="m_4795342214962359670mceSpacing-24" valign="top">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent;border-top:20px solid transparent;margin-bottom:0;margin-top:0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="min-width:100%" valign="top"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-left:48px;padding-right:48px;padding-top:24px" class="m_4795342214962359670mceSpacing-24" align="center" valign="top"><img width="564" style="width:564px;height:auto;max-width:100%" alt="" src="${text.url}" role="presentation" class="CToWUd a6T" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 451px; top: 781px;"><div id=":ut" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Descargar el archivo adjunto " data-tooltip-class="a1V" data-tooltip="Descargar"><div class="akn"><div class="aSK J-J5-Ji aYr"></div></div></div></div></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-left:48px;padding-right:48px;padding-top:24px" class="m_4795342214962359670mceSpacing-24" valign="top">
                                                                            <div class="m_4795342214962359670mceText" style="font-size:21px;text-align:center;width:100%">
                                                                                <p> <strong>+ colores disponibles</strong>
                                                                                </p>
                                                                                <p class="m_4795342214962359670last-child">${text.tipo_producto}
                                                                                    <strong>${text.Nombre_producto}</strong> </p>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-left:48px;padding-right:48px;padding-top:24px" class="m_4795342214962359670mceSpacing-24" align="center" valign="top">
                                                                            <table align="center" border="0" cellpadding="0" cellspacing="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="background-color:#f0ba36;border-radius:50px;text-align:center" valign="top">
                                                                                            <a href="http://wa.me/573022170428" style="background-color:#f0ba36;border-radius:50px;border:2px solid #f0ba36;color:#ffffff;display:inline-block;font-family:'Helvetica Neue',Helvetica,Arial,Verdana,sans-serif;font-size:21px;font-weight:bold;font-style:normal;padding:16px 28px;text-decoration:none;min-width:30px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://wa.me/573022170428&amp;source=gmail&amp;ust=1622562783014000&amp;usg=AFQjCNHVdFWBgQNiQnX4co5zqZLngWwSgA">Contactar</a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-top:24px" class="m_4795342214962359670mceSpacing-24" valign="top">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:transparent;border-top:20px solid transparent;margin-bottom:0;margin-top:0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="min-width:100%" valign="top"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="padding-top:24px" class="m_4795342214962359670mceSpacing-24" valign="top">
                                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" id="m_4795342214962359670section_6da3b22bd1b93b4b959cde376c18ea9c">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" valign="top">
                                                                                            <table border="0" cellpadding="0" cellspacing="12" width="100%" style="table-layout:fixed">
                                                                                                <colgroup>
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                    <col span="1">
                                                                                                </colgroup>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="background-position:center;background-repeat:no-repeat;background-size:cover" class="m_4795342214962359670mceColumn" valign="top" colspan="12" width="100%">
                                                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td class="m_4795342214962359670mceSpacing-24" align="center" valign="top">
                                                                                                                            <img width="205.0033222591362" style="width:205.0033222591362px;height:auto;max-width:100%" alt="Logo" src="https://ci5.googleusercontent.com/proxy/ZXgyG1httdc_6zl91Z4t_92_x6nPT6ptPYVvf8rmPiZ0B_w6hDnUF6pduA574oZk4hHjCa_3dNn9VE3akyjZ2iHAAo6WbYUGWC1x7EK5GHrCogeS_tizdBZp-ADbLdl3jgQDYfjg37pFxqQYvd3RyymDyyZp4IEuvrsbK02iKdUqxF_NJnkXLLU=s0-d-e1-ft#https://dim.mcusercontent.com/cs/39141c0539511166d13111c59/images/c6e53b9d-0b6c-5181-cc13-fe7eeb0a879d.png?w=268&dpr=2" class="CToWUd a6T" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 328px; top: 1251px;"><div id=":uu" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Descargar el archivo adjunto " data-tooltip-class="a1V" data-tooltip="Descargar"><div class="akn"><div class="aSK J-J5-Ji aYr"></div></div></div></div>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td style="padding-top:24px" class="m_4795342214962359670mceSpacing-24" align="center" valign="top">
                                                                                                                            <div class="m_4795342214962359670mceText" style="font-size:15.75px;display:inline-block;width:100%">
                                                                                                                                <p class="m_4795342214962359670last-child">
                                                                                                                                    ARTDECON
                                                                                                                                    de
                                                                                                                                    Colombia
                                                                                                                                    ©
                                                                                                                                    <em>Copyright.</em><br>Al
                                                                                                                                    suscribirte
                                                                                                                                    a
                                                                                                                                    ARTDECON
                                                                                                                                    de
                                                                                                                                    Colombia
                                                                                                                                    das
                                                                                                                                    tu
                                                                                                                                    consentimiento
                                                                                                                                    para
                                                                                                                                    procesar
                                                                                                                                    tus
                                                                                                                                    datos
                                                                                                                                    personales
                                                                                                                                    conforme
                                                                                                                                    a
                                                                                                                                    nuestra
                                                                                                                                    Política
                                                                                                                                    de
                                                                                                                                    privacidad.
                                                                                                                                    Recibes
                                                                                                                                    este
                                                                                                                                    mensaje
                                                                                                                                    de
                                                                                                                                    correo
                                                                                                                                    electrónico
                                                                                                                                    porque
                                                                                                                                    estas
                                                                                                                                    suscrito
                                                                                                                                    para
                                                                                                                                    recibir
                                                                                                                                    comunicaciones
                                                                                                                                    promocionales
                                                                                                                                    de
                                                                                                                                    ARTDECON
                                                                                                                                    de
                                                                                                                                    Colombia
                                                                                                                                    S.A.S.<br><br>Este
                                                                                                                                    mensaje
                                                                                                                                    ha
                                                                                                                                    sido
                                                                                                                                    enviado
                                                                                                                                    por
                                                                                                                                    el
                                                                                                                                    departamento
                                                                                                                                    de
                                                                                                                                    marketing
                                                                                                                                    y
                                                                                                                                    comunicaciones
                                                                                                                                    de
                                                                                                                                    ARTDECON
                                                                                                                                    de
                                                                                                                                    Colombia.<br><br>Cra
                                                                                                                                    26
                                                                                                                                    21
                                                                                                                                    -
                                                                                                                                    35
                                                                                                                                    Barranquilla,
                                                                                                                                    Colombia.<br><br><a href="http://www.artdecon.com" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.artdecon.com&amp;source=gmail&amp;ust=1622562783014000&amp;usg=AFQjCNFbz98SX_nlZQariGxaO_D9eJ4TGw">www.artdecon.com</a>
                                                                                                                                </p>
                                                                                                                            </div>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </center>
    </div>
    
    
    </div></div></div>
</body>

</html>
`;
exports.EmailTemplate = EmailTemplate;
//# sourceMappingURL=template.html.js.map