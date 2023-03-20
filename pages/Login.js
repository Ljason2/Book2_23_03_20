import Link from "next/link";
import Footer from "../components/Footer";
import { AiOutlineHome } from 'react-icons/ai';
import Image from "next/image";



function Login(){
    return(
        <div id="login">
    <header><div>  
    <h1><Link href="/"><Image 
         src="/images/logo.png" 
         alt="logo"
         width={64}
         height={64}
         /></Link></h1>
      <h1><Link href="/"><AiOutlineHome /></Link></h1> 
        </div></header>

            <div id="login2">
                <div id="login3">
        <form action="#" method="post">
            <fieldset>
                <legend><h1><span>MEMBERS <span>LOGIN</span></span></h1></legend>

                <p id="idpass">
            <label htmlFor="userId">아이디</label>
            <input type="text" 
            id="userId" name="userId"
            maxlength="12"
            placeholder="12자 이내로 입력 가능"/>
        </p>

        <p>
            <label htmlFor="userPw">비밀번호</label>
            <input type="password" id="userPw" name="userPw"
            />
        </p>
        

        <p id="logincancel">
        <input type="submit" value="로그인" />
	    <input type="reset" value="취소" />
		</p>

        <p id="security">
            <label htmlFor="security">
                <input type="checkbox" id="security" name="security" value="Y" />
                보안접속
            </label>
        </p>
            </fieldset>
        </form>

        <div id="simpleLogin">
        <p>
            <Image src="/images/simpleLogin.png" alt="simpleLogin"
            width={245}
            height={54}
            />
        </p>
        <div>
            <Link href="https://www.facebook.com/">
                <Image src="/images/sns_facebook.gif" alt="facebookLogin"
                width={160}
                height={34}
                />
            </Link>
            <Link href="https://www.naver.com/">
            <Image src="/images/sns_naver.gif" alt="naverLogin"
                width={160}
                height={34}
            />
            </Link>
            <Link href="https://www.kakaocorp.com/page/service/service/KakaoTalk">
            <Image src="/images/sns_kakaotalk.gif" alt="kakaotalkLogin"
                width={160}
                height={34}        
            />
            </Link>
            <Link href="https://www.apple.com/kr/store?afid=p238%7CsiADh6hbK-dc_mtid_18707vxu38484_pcrid_647265297067_pgrid_16348496961_pntwk_g_pchan__pexid__&cid=aos-kr-kwgo-Brand--slid---product-">
            <Image src="/images/sns_apple.gif" alt="appleLogin"
                width={160}
                height={34}
            />
            </Link>

        </div>
        </div>
        <div id="signup">
        <div className="btns">
        <Link href="/Join">
        <button>회원가입하기</button>
        </Link>
        <Link href="/Login">
        <button>아이디/비번찾기</button>
        </Link>
        </div>
        </div>
        </div>
        </div>
        <Footer />
        </div>

        )
}

export default Login;
