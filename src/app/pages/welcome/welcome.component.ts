import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

const generateProduct = () => ({
  title: 'Хрущевские фантики',
  expireAt: new Date('01-12-2020').getTime(),
  cost: 10000,
  previousCost: 12000,
  image: 'https://i.pinimg.com/564x/b2/f5/37/b2f537117590dc580fa6bcaf654bb808.jpg',
});

const generateArticle = () => ({
  title: 'Название статьи',
  link: '#',
  author: 'Константин Константинопольский',
  createdAt: new Date().getTime(),
  preview: 'https://i.pinimg.com/564x/c2/88/9b/c2889b6fde61383c1e05855a43577944.jpg',
});

const generateReview = () => ({
  images: [
    'https://i.pinimg.com/564x/b1/f2/15/b1f2152cc05338e26944f8b76a55afc4.jpg',
    'https://i.pinimg.com/564x/24/12/62/241262e1830e01246e3503f683dc9ed8.jpg',
    'https://i.pinimg.com/564x/77/12/ce/7712ce1b4d3c8d6cec281eca03f17274.jpg',
    'https://i.pinimg.com/564x/a4/9c/eb/a49ceb195aba7914af88d4dc3bb57b5e.jpg',
  ],
  avatar: 'https://i.pinimg.com/564x/fe/82/5b/fe825bd1d90e874265f464bdc59b263a.jpg',
  name: 'Aome Author Name',
  packId: 13,
  // tslint:disable-next-line:max-line-length
  review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
});

@Component({
  selector: 'ba-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public products = [generateProduct(), generateProduct(), generateProduct(), generateProduct(), generateProduct()];

  public featuredProducts = [generateProduct(), generateProduct(), generateProduct()];

  public articles = [generateArticle(), generateArticle(), generateArticle(), generateArticle(), generateArticle()];

  public reviews = [generateReview(), generateReview(), generateReview()];

  public inspirations = [
    'https://i.pinimg.com/564x/b1/f2/15/b1f2152cc05338e26944f8b76a55afc4.jpg',
    'https://i.pinimg.com/564x/24/12/62/241262e1830e01246e3503f683dc9ed8.jpg',
    'https://i.pinimg.com/564x/77/12/ce/7712ce1b4d3c8d6cec281eca03f17274.jpg',
    'https://i.pinimg.com/564x/a4/9c/eb/a49ceb195aba7914af88d4dc3bb57b5e.jpg',
    'https://i.pinimg.com/564x/b1/f2/15/b1f2152cc05338e26944f8b76a55afc4.jpg',
    'https://i.pinimg.com/564x/24/12/62/241262e1830e01246e3503f683dc9ed8.jpg',
    'https://i.pinimg.com/564x/77/12/ce/7712ce1b4d3c8d6cec281eca03f17274.jpg',
    'https://i.pinimg.com/564x/a4/9c/eb/a49ceb195aba7914af88d4dc3bb57b5e.jpg',
  ];

  public isTablet: boolean;
  public isMobile: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 1024px)', '(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          if (state.breakpoints['(max-width: 1024px)'] && state.breakpoints['(max-width: 768px)']) {
            this.isTablet = false;
            this.isMobile = true;
          } else if (!state.breakpoints['(max-width: 768px)'] && state.breakpoints['(max-width: 1024px)']) {
            this.isTablet = true;
            this.isMobile = false;
          }
        } else {
          this.isTablet = false;
          this.isMobile = false;
        }
      });
  }

}
