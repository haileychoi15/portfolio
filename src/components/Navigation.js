import React from 'react';
import styled from 'styled-components';
import { GoHome } from 'react-icons/go';
import { useAnimation } from "../hooks/UseAnimation";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  border-radius: 6px;
  background: none;
  z-index: 1000;
`;

const Li = styled.li`
  & + & {
    margin-top: 30px;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  &.active {
    color: #4fc08d;
  }
  & .menu-icon {
    font-size: 20px;
  }
  &:hover {
    color: #4fc08d;
  }
`;

function Navigation() {

    const detectScroll = (items) => {
        let scrollStop = function (callback) {
            if (!callback || typeof callback !== 'function') return;
            let isScrolling;
            const handleScroll = () => {
                window.clearTimeout(isScrolling);
                isScrolling = setTimeout(function() {
                    callback();
                }, 66);
            }
            window.addEventListener('scroll', function (event) {
                handleScroll();
            }, false);
        };

        scrollStop(function () {
            items.forEach(item => item.classList.remove('scrolling'));
        });
    }

    const handleClick = (e) => {
        const items = document.querySelectorAll('.nav-item');
        items.forEach(item => {
            item.classList.add('scrolling');
            item.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        detectScroll(items);
    }

    return (
        <Container>
            <ul>
                <Li {...useAnimation('up', 200,'2')}>
                    <Link href="#home" className="nav-item home active" onClick={handleClick}>
                        <GoHome className="menu-icon" />
                    </Link>
                </Li>
                <Li {...useAnimation('up', 200,'2.2')}>
                    <Link href="#first" className="nav-item first" onClick={handleClick}>
                        01
                    </Link>
                </Li>
                <Li {...useAnimation('up', 200,'2.4')}>
                    <Link href="#second" className="nav-item second" onClick={handleClick}>
                        02
                    </Link>
                </Li>
                <Li {...useAnimation('up', 200,'2.6')}>
                    <Link href="#third" className="nav-item third" onClick={handleClick}>
                        03
                    </Link>
                </Li>
            </ul>
        </Container>
    );
}

export default Navigation;