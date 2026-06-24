import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from "@mui/material";
import { PageSection } from "../_sections/PageSection";

export default function Donation() {
  return (
    <PageSection>
      <Typography variant='h4' gutterBottom align='center'>
        Support Us
      </Typography>
      <Typography
        variant='body1'
        gutterBottom
        align='center'
        sx={{
          fontFamily: "monospace",
          mb: 2,
        }}>
        Your support helps us continue to create and share valuable content. You
        can support us through Patreon or Ko-fi.
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          py: 2,
        }}>
        <Card elevation={0} sx={{ width: 220, backgroundColor: "transparent" }}>
          <CardMedia
            sx={{
              height: 200,
              width: 200,
              margin: "0 auto",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "transparent",
            }}
            image='/images/patreon_pay.png'
            title='Patreon'
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Link
              href='https://www.patreon.com/cw/PsyberMagus'
              target='_blank'
              rel='noopener noreferrer'
              underline='hover'>
              Patreon
            </Link>
          </CardContent>
        </Card>
        <Card elevation={0} sx={{ width: 220, backgroundColor: "transparent" }}>
          <CardMedia
            sx={{
              height: 200,
              width: 200,
              margin: "0 auto",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "transparent",
            }}
            image='/images/kofi_pay.png'
            title='Ko-fi'
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Link
              href='https://ko-fi.com/psybermagus'
              target='_blank'
              rel='noopener noreferrer'
              underline='hover'>
              Ko-fi
            </Link>
          </CardContent>
        </Card>
      </Container>
    </PageSection>
  );
}
